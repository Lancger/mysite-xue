# mysity-xue
django 后台api项目

#  依赖环境准备
```
python3 -m venv .venv3
source /usr/local/.venv3/bin/activate

## 添加到环境变量
#vim ~/.bashrc
source /usr/local/.venv3/bin/activate

pip3 install -i https://pypi.douban.com/simple django
pip3 install -i https://pypi.douban.com/simple django-cors-headers
```

# 数据库操作

```
1、创建数据库
mysql -h 127.0.0.1 -u root -p123456 -e "create database mysite default character set utf8mb4 collate utf8mb4_unicode_ci;"
mysql -h 127.0.0.1 -u root -p123456 mysite < data.sql

2、建表操作
python manage.py makemigrations
python manage.py migrate

3、创建超级管理员
python manage.py createsuperuser

python manage.py createsuperuser --username admin --email admin@domain.com

```

# 运行
```
python manage.py runserver 0.0.0.0:8000

登录账号为：admin  密码为：123456


访问测试：

http://127.0.0.1/api/user/

```