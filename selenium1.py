from selenium import webdriver
from selenium.webdriver.common.by import By
import math

# Шлях до веб-драйвера
driver_path = 'F:/Downloads/chromedriver'

# Створюємо екземпляр веб-драйвера Chrome
driver = webdriver.Chrome()

# Відкриваємо сторінку
driver.get('http://suninjuly.github.io/math.html')

try:
    # Зчитуємо значення змінної x зі сторінки
    x_element = driver.find_element(By.ID, 'input_value')
    x = int(x_element.text)

    # Обчислюємо математичну функцію від x
    result = str(math.log(abs(12*math.sin(x))))

    # Заповнюємо текстове поле знайденим результатом
    input_element = driver.find_element(By.ID, 'answer')
    input_element.send_keys(result)

    # Вибираємо checkbox "I'm the robot"
    checkbox = driver.find_element(By.ID, 'robotCheckbox')
    checkbox.click()

    # Вибираємо radiobutton "Robots rule!"
    radiobutton = driver.find_element(By.ID, 'robotsRule')
    radiobutton.click()

    # Натискаємо кнопку "Submit"
    submit_button = driver.find_element(By.CSS_SELECTOR, '[type="submit"]')
    submit_button.click()
    

finally:
    # Завершуємо роботу веб-драйвера
    driver.quit()
