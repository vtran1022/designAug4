# TEST API

## GET /dogs

Retrieves all dogs information

###### Parameters

none

###### Response

`Status: 200 OK`

```
[
    {
        "dogs_id": 1,
        "name": "Piper",
        "breed": "bulldog"
    },
    {
        "dogs_id": 2,
        "name": "Dolli",
        "breed": "poodle"
    },
    {
        "dogs_id": 3,
        "name": "Markus ",
        "breed": "german shepherd"
    },
    ...

]
```

## GET /dogs/:name

Retrieves the specified dog information

###### Parameters

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| name      | string | name of dog |

###### Response

`Status: 200 OK`

```
[
    {
        "dogs_id": 4,
        "name": "Jorge",
        "breed": "husky"
    }
]
```

## POST /dogs

Adds a new dog information

###### Parameters

| Parameter | Type   | Description  |
| --------- | ------ | ------------ |
| name      | string | name of dog  |
| breed     | string | breed of dog |

###### Response

`Status: 200 OK`

```
Successfully added dog! System message: ...
```
