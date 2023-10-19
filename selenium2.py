from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import StaleElementReferenceException
from selenium.common.exceptions import ElementNotInteractableException
# Ініціалізація веб-драйвера
driver = webdriver.Chrome()

# Відкриття сторінки
driver.get('http://demo-store.seleniumacademy.com/')

# Знайдемо всі посилання на сторінки сайту
links = driver.find_elements(By.TAG_NAME, 'a')

for link in links:
    try:
        href = link.get_attribute('href')
        if href:
            # Перехід на сторінку
            driver.get(href)
            print(f"Перехід на сторінку: {href}")
            
            # Додайте додаткову перевірку для кожної сторінки, якщо потрібно

    except StaleElementReferenceException:
        print(f"Помилка: елемент став застарілим, спроба знову отримати елемент та перейти на сторінку.")
    except ElementNotInteractableException as e:
            print(f"Помилка під час переходу на сторінку {href}: {str(e)}")
# Знаходження елемента за ідентифікатором (ID) та введення тексту
search_box = driver.find_element(By.ID, 'search')  # Використовуємо метод find_element та ідентифікатор (ID)
search_box.send_keys('shirt')

# Клацання на кнопці пошуку
search_button = driver.find_element(By.CLASS_NAME, 'button.search-button')  # Аналогічно використовуємо метод find_element
search_button.click()

# Додавання товару у корзину
add_to_cart_button = driver.find_element(By.ID, 'product-collection-image-402')
add_to_cart_button.click()
add_to_cart_button = driver.find_element(By.ID, 'option22')
add_to_cart_button.click()
add_to_cart_button = driver.find_element(By.ID, 'option80')
add_to_cart_button.click()
add_to_cart_button2 = driver.find_element(By.CLASS_NAME, 'button.btn-cart')
add_to_cart_button2.click()
    # Перевірка, чи товар додався до корзини
success_message = driver.find_element(By.CLASS_NAME, 'success-msg')
assert "was added to your shopping cart." in success_message.text

    # Переход до сторінки корзини
view_cart_button = driver.find_element(By.XPATH, "//a[@title='View your shopping cart']")
view_cart_button.click()

    # Перевірка, чи корзина не порожня та містить товар
cart_items = driver.find_elements(By.CLASS_NAME, 'product-cart-image')
assert len(cart_items) > 0

    # Видалення товару з корзини
remove_button = driver.find_element(By.XPATH, "//a[@title='Remove item']")
remove_button.click()

    # Перевірка порожньої корзини
empty_cart_message = driver.find_element(By.XPATH, "//h1[text()='Shopping Cart is Empty']")
assert "Shopping Cart is Empty" in empty_cart_message.text

# Завершення роботи веб-драйвера
driver.quit()
