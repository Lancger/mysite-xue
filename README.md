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


python manage.py makemigrations
python manage.py migrate

python manage.py createsuperuser --username admin --email admin@domain.com

1、创建超级管理员
python manage.py createsuperuser

```

