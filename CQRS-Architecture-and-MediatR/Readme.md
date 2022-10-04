# CQRS Architecture and MediatR

CQRS (CQS)
CQRS is short for Command Query Responsibility Segregation, while CQS is short for (Command Query Segregation). CQS is a code pattern that segregates GET response into one flow (query flow) and writing or updating request (POST, PUT, PATCH, DELETE) into another flow (command flow). CQRS is an architectural pattern that requires a read database for query flow and write database for command flow.

Read database can be fully optimized for read (with all indexes that will increase read speed, etc.), while write database is optimized for data updates and insertions.

![image-1](https://user-images.githubusercontent.com/58937669/172811655-3c35dfc6-9607-4353-81c8-97c34da31afb.png)



## How do MediatR and CQRS fit together?

MediatR fits perfectly in the application layer of the CQRS schema, but don t just take my word for it. These two combined will give your application the best read-write performances, thin controllers, and handlers that will have a single responsibility.



![image-3](https://user-images.githubusercontent.com/58937669/172811695-ecf9e73e-48be-4f85-b8a5-bc0dd746e7e9.png)


# The Problem 

![problem](https://user-images.githubusercontent.com/58937669/172811764-09afa1a6-038b-4cce-a665-e743592a104b.png)


## The solution
![solution](https://user-images.githubusercontent.com/58937669/172811809-7d309fb7-5e32-4a1b-8404-2e292a4eb834.png)


## CQRS Operations
![CQRS operation flow](https://user-images.githubusercontent.com/58937669/172830118-bf68fc8d-776d-46b8-81c8-6d36fd0125c2.png)
