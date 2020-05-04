## Instalar dependencias:

##### djangocrud:
pip install -r requirements.txt

##### angular-crud:
npm install

##### Crear las migraciones en django:
python manage.py makemigrations

python manage.py migrate

##### Iniciar los 2 proyectos:
python manage.py runserver

ng serve

##### Acceder a la url localhost:4200

## Explicación:
##### He utilizado djangorestframework para crear la api en el backend y angular en el cliente. He tenido problemas con la base de datos mongodb(problemas con el id), ya que nunca había utilizado django con una NoSql. Al igual nunca había utilizado angular con django y he investigado, como comento en el correo por otros problemas no tuve tiempo para acabarlo todo e ir un poco a contrarreloj, he utilizado restframework.authtoken para el login aunque no se muestre muy bien el cliente. Tambien he utilizado librerías de angular y externas(cdk, angular-bootstrap-md, fontawesome, chart, hammerjs, animate) para cargar bootstrap.
