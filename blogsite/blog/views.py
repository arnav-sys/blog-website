from django.shortcuts import render, HttpResponse
from blog.models import Role, Blog
from django.core import serializers
import json

MainUser = None

def register(request):
    if request.method == "POST":
        raw_user = json.loads(request.body)
        password = raw_user["password"]
        user = Role(name=raw_user["name"], email=raw_user["email"], password=password)
        user.save()
        global MainUser
        MainUser = user
        userj = serializers.serialize("json",[user])
        return HttpResponse(userj)
    return HttpResponse("ok")

def login(request):
    if request.method == "POST":
        raw_user = json.loads(request.body)
        email = raw_user["email"]
        password = raw_user["password"]
        user = Role.objects.get(email=email)
        userj =serializers.serialize("json",[user])
        user_password = user.password
        if user is not None:
            global originalpassword
            if password == user_password:
                global MainUser
                print("ok")
                MainUser = user
                print(user)
                obj = {
                    "name":user.name,
                    "email":user.email,
                }
                return HttpResponse(userj)
            else:
                return HttpResponse("wrong password")
        else:
            return HttpResponse("Cannot find user")

def resetpassword(request):
    if request.method == "PUT":
        raw_user = json.loads(request.body)
        name = raw_user["name"]
        new_password = raw_user["newpassword"]
        user = Role.objects.get(name=name)
        user.password = new_password
        user.save()
        userj = serializers.serialize("json",[user])
        obj = {
            "name":user.name,
            "email":user.email,
        }
        return HttpResponse(userj)

def getmyblogs(request):
    if request.method == "GET":
        blogs = Blog.objects.filter(user=MainUser)
        print(MainUser)
        blogsj = serializers.serialize("json",blogs)
        return HttpResponse(blogsj)

def getallblogs(request):
    if request.method == "GET":
        blogs = Blog.objects.all()
        db = serializers.serialize("json",blogs)
        print(db)
        return HttpResponse(db, content_type="application/json")

def addblog(request):
    if request.method == "POST":
        raw_blog = json.loads(request.body)
        title = raw_blog["title"]
        imgurl = raw_blog["imgurl"]
        content = raw_blog["content"]
        likes = 0
        global MainUser
        blog = Blog(title=title, imgurl=imgurl,content=content,likes=likes,user=MainUser)
        blog.save()
        blogj = serializers.serialize("json",[blog])
        return HttpResponse(blogj)

def deleteblog(request):
    if request.method == "DELETE":
        raw_blog = json.loads(request.body)
        title = raw_blog["title"]
        blog = Blog.objects.get(title=title)
        blog.delete()
        return HttpResponse("blog deleted")

def editblog(request):
    if request.method == "POST":
        global MainUser
        print("ok")
        raw_blog = json.loads(request.body)
        index = raw_blog["index"]
        index = int(index)
        blog = Blog.objects.all()[index]
        
        print(blog.title)
        blog.title = raw_blog["newtitle"]
        print(blog.title)
        blog.content = raw_blog["content"]
        blog.imgurl = raw_blog["imgurl"]
        blog.save()
        print(blog.title)
        blogj = serializers.serialize("json",[blog])
        return HttpResponse(blogj)

def likeblog(request):
    if request.method == "PUT":
        raw_blog = json.loads(request.body)
        blog = Blog.objects.get(title=raw_blog["title"])
        blog.likes = blog.likes + 1
        blog.save()
        bloglist = []
        bloglist.append({
            "title":blog.title,
            "imgurl":blog.imgurl,
            "content":blog.content,
            "likes":blog.likes,
            "username":MainUser.name,
        })
        return HttpResponse(bloglist)