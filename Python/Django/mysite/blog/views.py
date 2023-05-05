from multiprocessing import context
from django.shortcuts import render
from django.http import HttpResponse

posts = [
    {
        'author': 'Emil',
        'title': 'Django',
        'content': 'first django project',
        'date_posted': 'May 4, 2023'
    },
    {
        'author': 'Emil',
        'title': 'Dummy',
        'content': 'dummy post',
        'date_posted': 'May 4, 2023'
}
]

def home(request):
    context = {
        'posts': posts,
    }
    return render(request, 'blog/home.html', context)


def about(request):
    return render(request, 'blog/about.html', {'title': 'About'})




# Create your views here.
