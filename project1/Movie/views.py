from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render


def index(request):
    return render(request, '/flatpages/default.html')

