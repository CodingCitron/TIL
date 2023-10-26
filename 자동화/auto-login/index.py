'''
셀레니움 설치
크롬드라이버 설치

https://www.selenium.dev/downloads/
'''

'''
아이디 요소
<p class="id"><input type="text" placeholder="아이디" name="wdId"></p>
/html/body/div/div/form/div/p[1]/input

비밀번호 요소
<p class="pw"><input type="password" placeholder="비밀번호" name="wdPw"></p>
/html/body/div/div/form/div/p[2]/input

로그인 버튼
/html/body/div/div/form/div/button
'''
import time
import os
import getpass
from selenium import webdriver 
from selenium.webdriver.common.by import By
from dotenv import load_dotenv
load_dotenv()

options = webdriver.ChromeOptions()
# 브라우저 사이즈 : 현재 창을 열지 않는 방식으로 구현
# options.add_argument('window-size=800,600')

url = os.getenv("URL")

# user_id = input('아이디를 입력하세요: ')
# user_pw = getpass.getpass('비밀번호를 입력하세요: ')

user_id = os.getenv("USER_ID")
user_pwd = os.getenv("USER_PWD")

driver = webdriver.Chrome()
driver.get(url)

# 대기시간 부여
driver.implicitly_wait(3)

driver.find_element(By.NAME, 'wdId').send_keys(user_id)
driver.find_element(By.NAME, 'wdPw').send_keys(user_pwd)
driver.find_element(By.XPATH, '/html/body/div/div/form/div/button').click()

# 대기시간 부여
driver.implicitly_wait(5)

# driver.get_screenshot_as_file('capture.png')
driver.get(os.getenv("AS_URL"))
driver.implicitly_wait(2)
driver.get_screenshot_as_file('capture.png')
time.sleep(1000)

driver.implicitly_wait(5)
driver.quit()

