## User
#### POST
###### роут [host/users]() входные данные:

```
{
    "name": "Bob",
    "email": "bob@mail.ru",
    "phone": "8800553535"
}
```

#### GET
###### роут [/users/**id**]() 

- **id** - идентификатор пользователя

выходные данные:


```
{
    "id": 1,
    "name": "Bob",
    "email": "bob@mail.ru",
    "phone": "8800553535"
}
```
###### роут [/users/all]() 

выходные данные:

```
[
    {
        "id": 1,
        "name": "name1",
        "email": "email1",
        "phone": "phoen1"
    },
    {
        "id": 2,
        "name": "name2",
        "email": "email2",
        "phone": "phoen2"
    }
]
```
###### роут [/users/without-cars]() 

выходные данные:

```
[
    {
        "id": 1,
        "name": "name1",
        "email": "email1",
        "phone": "phoen1"
    },
    {
        "id": 2,
        "name": "name2",
        "email": "email2",
        "phone": "phoen2"
    }
]
```
###### роут [/users/**id**/cars/]() 

- **id** - идентификатор пользователя

выходные данные:

```
[
    {
        "id": 1,
        "name": "name1",
        "email": "email1",
        "phone": "phoen1"
    },
    {
        "id": 2,
        "name": "name2",
        "email": "email2",
        "phone": "phoen2"
    }
]
```
#### PUT
###### роут [/users/**id**/add/cars]() 

- **id** - идентификатор пользователя

входные данные масив id машин с пустым id_user(без пользователя):
```
[1,2,3]
```

###### роут [/users/**id**]() 

- **id** - идентификатор пользователя

входные данные поля для изменения с их значением:
```
{
	"email": "none",
	"phone": "88"
}
```
#### DELETE
###### роут [/users/**id**]() 

- **id** - идентификатор пользователя

!!! Удаление не сработает если у пользователя есть машины

## Car

#### GET
###### роут [/cars/**id**]() 

- **id** - идентификатор машины

выходные данные:
```
{
    "id": 1,
    "car_make": "ford1",
    "car_model": "mord1",
    "date": "2019-11-20T21:00:00.000Z",
    "user_id": 1
}
```
###### роут [/cars/**make**/without-user/]() 

- **make** - марка машины

выходные данные:
```
[
    {
        "id": 2,
        "car_make": "ford2",
        "car_model": "mord2",
        "date": "2019-11-20T21:00:00.000Z",
        "user_id": null
    }
]
```
#### post
###### роут [/cars/]() 

входные данные:
```
{
    "car_make": "lord",
    "car_model": "88",
    "date": "2019-11-21"
}
```
#### put
###### роут [/cars/**id**]() 

- **id** - идентификатор машины

входные данные поля для изменения и их своства:
```
{
    "car_make": "lord",
    "car_model": "88",
    "date": "2019-11-21"
}
```
###### роут [/cars/**id**/add-user]() 

- **id** - идентификатор машины

входные данные:
```
{
	"user_id": "1"
}
```
#### DELETE
###### роут [/cars/**id**]() 

- **id** - идентификатор машины

