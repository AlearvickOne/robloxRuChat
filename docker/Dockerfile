# Используем официальный образ MySQL
FROM mysql:9.0.1

# Устанавливаем переменные окружения для инициализации
ENV MYSQL_ROOT_PASSWORD=A123456
ENV MYSQL_DATABASE=roblox_ruchat
ENV MYSQL_USER=alearvick
ENV MYSQL_PASSWORD=A123456
ENV MYSQL_TCP_PORT=3902

# Открываем порт для MySQL
EXPOSE 3902

# Запускаем MySQL
CMD ["mysqld"]