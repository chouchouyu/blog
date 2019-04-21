var fs = require('fs');
var path = require('path');//解析需要遍历的文件夹

var filePath = path.resolve('./list');
var cheerio = require('cheerio');
//  var iconv = require('iconv-lite');

//调用文件遍历方法
fileDisplay(filePath);
//文件遍历方法
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                          var basename = path.basename(filedir);
                            if(basename.indexOf("-")==-1){
                                var indexStr = basename.substring(0,basename.indexOf('.html'));
                                    // console.log(indexStr);
                                var index = + indexStr;
                                var index= index-1+100;
                                var newBasename = indexStr+'-'+index+'.html';

                                  newBasename = filedir.substring(0,filedir.indexOf(path.basename(filedir)))+newBasename;
                                  console.log(newBasename);
                                fs.rename(filedir,newBasename,function(err){
                                      if(err)
                                          console.log('error:'+err);
                                  });
                            }


                            var dirContentStr;

　　　　　　　　　　　　　　　　　// 读取文件内容
                            var myHtml = fs.readFileSync(filedir, 'utf-8');
                            var $ = cheerio.load(myHtml);
                            var t = $('html').find('span');
                            var t2 = t.nextAll();

                            t2.each(function(i, elem) {
                                dirContentStr =  $(this).text().replace(/\s+/g,"").replace("undefined","");
                                // getContent($(this));
                                console.log(dirContentStr);//去空格

                            });
                            // var dd=content.replace(/<[^>]+>/g,"");

                            // var myHtml = fs.readFileSync(filedir);
                            // var content = iconv.decode(myHtml, 'gbk');
                            // console.log(dd);
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}



// 如果碰到有中文不能解析的html，这样写

//
// var cheerio = require('cheerio');
// var iconv = require('iconv-lite');
// var myHtml = fs.readFileSync("index.html");
// var myHtml2 = iconv.decode(myHtml, 'gbk');
// console.log(myHtml2);

// https://www.cnblogs.com/astropeak/p/6194929.html
// nodejs cheerio模块提取html页面内容