import requests
from bs4 import BeautifulSoup

login_url = 'https://www.facebook.com/'
data = {
    'username': 'your_username',
    'password': 'your_password'
}

with requests.Session() as s:
    response = requests.get(login_url)
    # response = requests.post(login_url , data)
    print(response.text)
    # index_page= s.get('http://example.com')
    # soup = BeautifulSoup(index_page.text, 'html.parser')
    # print(soup.title)

# URL = 'https://www.monster.com/jobs/search/?q=Software-Developer&where=Australia'
# page = requests.get(URL)

# soup = BeautifulSoup(page.content, 'html.parser')
