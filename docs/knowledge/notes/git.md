# git
>
git源码 https://github.com/git/git
git文档 https://git-scm.com/

## 1.   VCS(control version system)
   git gitlab github 
##2.   git config （配置）三个作用域 
 local global system 
 
##3. git 文件存储 
 工作目录 -> 暂存区 -> 版本历史

##4. git 对象   commit tree blob 
 ![屏幕快照 2021-05-29 上午8.40.37](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-29%20%E4%B8%8A%E5%8D%888.40.37.png)
 现在我们应该明白git底层的运行流程了，当我们添加或者修改了文件并且add到Stage Area之后，首先会根据文件内容创建不同的blob，当进行提交之后马上创建一个tree组件把需要的blob组件添加进去，之后再封装到一个commit组件中完成本次提交。在将来进行reset的时候可以直接使用git reset --hard xxxxx可以恢复到某个特定的版本，在reset之后，git会根据这个commit组件的id快速的找到tree组件，然后根据tree找到blob组件，之后对仓库进行还原，整个过程都是以hash和二进制进行操作，所以git执行效率非常之高。
 
 
---
可以看到修改了老message后，自父亲commit以下，所有commit都变了，这是为什么，为什么不只修改2个commit，就像链表操作一样，只需要修改当前节点和当前节点的子节点就可以了，是因为git不允许修改commit对象吗？只允许新建commit对象。
作者回复: blob是只看内容的，两个文件如果内容相同，对应的blob是相同的，即使这俩文件在不同的git仓库。

但commit还包括commit的message，作者，变更时间，父亲等属性，这些🀄️的一个发生变化了，在git眼里就是不同的commit。

如果前3个commit的message变了，前3哥commit就变了，它一变，前2个commit的parent就变了，因此前2个commit也要变，依此类推
---

##5. 分离头指针 HEAD 
>  commit其实是某次提交的文件快照，git是基于提交的，我们可以用git cat-file -t commit_id(Git为标识每次提交产生的40位经过SHA1加密过之后的HASH值)， 来查看commit_id所属的对象类型，使用git cat-file -p commit_id来查看每个对象的内容和简单的数据结构。git主要有四种对象类型，Blog,Tree,Commit,Tag,他们都是用SHA1计算出来的HASH值进行命名。(git cat-file是git的瑞士军刀，是底层的核心命令。)
>        --啥是git分离头指针https://zhuanlan.zhihu.com/p/158635615
 
*  find .git/objects -type f
* git cat-file -p  提交hash值

* 分离头指针 detached HEAD 问题没和分支挂钩，切掉其他的分支 会丢失分离头指针内容
* head一般会指向一个分支，但是这个head没有指向任何分支，就分离头指针
![屏幕快照 2021-05-29 上午9.07.11](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-29%20%E4%B8%8A%E5%8D%889.07.11.png)



## 6. 常用的git指令 
### 6.1 怎么修改最新commit message?
 怎么修改老旧 commit message ?
 怎么把连续的多个commith整理成一个? 
 怎么把间隔的几个commit整理成一个?
![屏幕快照 2021-05-29 上午9.06.00](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-29%20%E4%B8%8A%E5%8D%889.06.00.png)
  
```
    git diff vsc diff
    git diff HEAD HEAD^1^1
    git commit -- amend
```
##6.2 git rebase 和 git merge 有啥区别？

>  举例:如果你从 master 拉了个feature分支出来,然后你提交了几个 commit,这个时候刚好有人把他开发的东西合并到 master 了,这个时候 master 就比你拉分支的时候多了几个 commit,如果这个时候你 rebase master 的话，就会把你当前的几个 commit，放到那个人 commit 的后面。

>  merge 会把公共分支和你当前的commit 合并在一起，形成一个新的 commit 提交
> --git rebase 还是 merge的使用场景最通俗的解释
https://www.jianshu.com/p/4079284dd970


##6.3 Git stash apply 

> git stash的使用场景： 当前分支下的某几个文件，前面的修改部分已经放在暂存区，目前在工作区还在进行修改，如果此时需要在当前文件下进行紧急修复bug，就需要把工作区正在修改的文件stash暂存起来，进行bug修复工作，在完成bug修复工作后，提交commit，将暂存的工作区文件内容拿出来继续工作。
 
--- git命令中git stash pop 与git stash apply的区别
https://blog.csdn.net/yao_94/article/details/88929992

### 6.4 git add .与git add -A的区别
一.版本导致的差别：

1.x版本：

（1）.git add all可以提交未跟踪、修改和删除文件。

（2）.git add .可以提交未跟踪和修改文件，但是不处理删除文件。

2.x版本：

两者功能在提交类型方面是相同的。

二.所在目录不同导致的差异：

（1）.git add all 提交的是整个仓库
（2）.git add .只能够提交当前目录或者它子目录下相应文件。

### 6.5 禁止向集成分支执行 push-f

### 6.6 删除 git 仓库中无用大文件

https://www.cnblogs.com/oloroso/p/13367120.html
### 6.7 Git 这样回退代码，才足够优雅
https://mp.weixin.qq.com/s/C4jc29ECYCRqUEd02palgw




## 7. ssh权限问题
关于其他同学遇到的ssh权限问题，我看到网上有个测试方法：`ssh -T git@github.com`，成功与否都会有相应提示。我一开始总报错denied，然后发现可以用`ssh -vT git@github.com`看具体发生了什么，发现ssh并没有使用我刚才生成的key，查了一圈，发现需要改`~/.ssh/config`这个文件。

假设我们通过命令生成的是`my_key`和`my_key.pub`，那么可以添加如下信息到`~/.ssh/config`下：
```
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/my_key

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/my_key
```
此处我除了github，还另外添加了gitee，如果有其他服务器比如公司的仓库，也应该能一起添加进去的。然后确保github或者gitee上自己profile里ssh部分，添加了`my_key.pub`里面的公钥内容，那么此时用命令：`ssh -T git@github.com`，就报成功了。然后就可以愉快地用使用`git@github.com:xxx`的地址进行ssh通信了

## 8.gitlab搭建

老师请教一个问题关于备份代码仓库的问题，如果gitlab是T级别数据的话，rake备份肯定特别慢，我测试直接把repo仓库目录拷贝到新的gitlab机器上，并不能直接访问，是还需要备份数据库什么么，还是方式不对呢，有更好的方式么，谢谢老师
作者回复: 我们在GitLab上创建了备机的service，让每个仓库的变更都触发rsync增量备份。

当然一开始搭建备机的时候，肯定要先把原有的仓库一股脑地同步到备机上，可以选个双休日做rsync。

另外，GitLab新版本提供了Mirror a repository 的功能，是不是也可以借鉴一下。

* GitLab持续集成持续部署（CI&CD）
 https://blog.csdn.net/qq_27520051/article/details/80552220
*  Webhook到底是个啥？https://zhuanlan.zhihu.com/p/133449879

*  团队工作流
![屏幕快照 2021-05-30 下午8.51.06](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%888.51.06.png)
![屏幕快照 2021-05-30 下午8.52.13](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%888.52.13.png)
![屏幕快照 2021-05-30 下午8.52.51](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%888.52.51.png)
![屏幕快照 2021-05-30 下午8.53.36](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%888.53.36.png)

## 9.github

github 最好学习资料 in：readme stars >1000
![屏幕快照 2021-05-30 下午7.59.22](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%887.59.22.png)


![屏幕快照 2021-05-30 下午10.29.34](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8810.29.34.png)
![屏幕快照 2021-05-30 下午10.30.00](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8810.30.00.png)
![屏幕快照 2021-05-30 下午10.52.56](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8810.52.56.png)
![屏幕快照 2021-05-30 下午11.01.03](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8811.01.03.png)
![屏幕快照 2021-05-30 下午11.02.31](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8811.02.31.png)
![屏幕快照 2021-05-30 下午11.03.59](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8811.03.59.png)
![屏幕快照 2021-05-30 下午11.04.22](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8811.04.22.png)
![屏幕快照 2021-05-30 下午11.08.46](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8811.08.46.png)
![屏幕快照 2021-05-30 下午11.09.15](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8811.09.15.png)
##8. 怎么把应用部署到AWS上
![屏幕快照 2021-05-30 下午11.10.29](media/16222477225866/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202021-05-30%20%E4%B8%8B%E5%8D%8811.10.29.png)

# 9. 他们怎么讨论git
* 阿里技术：源码解析：Git的第一个提交是什么样的？
https://mp.weixin.qq.com/s/hW4uTFF-TzBOAzfoupXINg

* 阿里技术：一文讲透 Git 底层数据结构和原理
https://mp.weixin.qq.com/s?__biz=MzIzOTU0NTQ0MA==&mid=2247496082&idx=1&sn=4995262c811e73119189174969e53ff2&chksm=e92acc9dde5d458b2ab75321a684a5a6229c6d323fc332a75a2d2b0136e9f28a2a60f6d8f657&scene=178&cur_album_id=1419161363276169216#rd

* 闲鱼技术
Hook Git实现代码与需求的一致性
https://blog.csdn.net/weixin_38912070/article/details/93857074?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162298118416780262561799%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=162298118416780262561799&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-1-93857074.pc_v2_rank_blog_default&utm_term=git&spm=1018.2226.3001.4450
* 有赞零售移动CI/CD实践
https://mp.weixin.qq.com/s/QNLrKvZRUXDy8_Wo8lUGHw
* 通过git bisect快速定位大型工程中的问题
https://mp.weixin.qq.com/s/NxiXpTrh9uBA4__lVncw2Q