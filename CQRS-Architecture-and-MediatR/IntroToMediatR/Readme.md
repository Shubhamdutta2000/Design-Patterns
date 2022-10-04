## CQRS Operations
![CQRS operation flow](https://user-images.githubusercontent.com/58937669/172830118-bf68fc8d-776d-46b8-81c8-6d36fd0125c2.png)

## Structure

Query is for read only it should not modify any action

Handler -> Logic for query to fetch data

DataAccess -> Fake data

Command is for POST


- DemoLibrary  -> MediatR Lib
- Blazor UI -> Client ui which use MediatR to fetch data
- DemoApi -> WebApi to do CURD operation with MediatR
