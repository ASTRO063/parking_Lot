
## This is a ticket issuing system to park in. Where vehiles are provided with parking slot.


# **Functionalities**
> create_parking_lot < size > , creates parking lot of desired size.

> park < vechlie reg no> < color of vechile > , issue the slot ticket to vechile at availabe slot.

> leave < ticket number > , frees the given slot

>status , gives the status of parking lot

>registration_numbers_for_cars_with_colour < colour > , gives the cars registration  number with given color

> slot_numbers_for_cars_with_colour < colour > , gives the parked slots of the given colour 

> slot_number_for_registration_number < registration num > , gives the parked slot number povided vechile registration number

## NOTE :
Provide the input in the above specifed manner only.

# **Asumptions**

### Before runing the programme there are following assumptions need to keep in mind
* Always the first input should be *create_parking_lot* 
* While leaving parking lot driver always provides correct ticket number

# **SETUP**
Run the following command to setup the project
```
$ ./bin/setup.sh
```
change the file permission if there is problem in running above command.

#  **To Run the Code**
The system can take inputs/run on both interactive command prompt as well as from a text file.

1. ### **Through CLI**
```
 $ ./bin/parking_lot.sh 
```
2. ### **Using File**
```
$ ./bin/parking_lot.sh file_inputs.txt 
```

