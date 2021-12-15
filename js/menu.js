
        var count = 0;

        do{
    
            var pinNum = parseInt(prompt("Enter your PIN number"));
    
            if(pinNum == 1234)
            {
                alert("Access Granted");
                menu();
                break;
            }
            else
            {
                alert("Incorrect code");
                count = count + 1;
            }
    
            if( count == 3)
            {
                alert("You have been locked out of the system")
            }
    
        }while( count < 3 )
    
        function menu()
        {
            
            var balance = 1000;
    
            do{
                
                choice = parseInt(prompt("Menu" + "\n" + "\n" + "1. Display Balance" + "\n" + "2. Add Funds" + "\n" + "3. Withdraw Funds" + "\n" + "4. EXIT"));
    
                switch(choice){
    
                    case 1:
                    display();
                    break;
    
                    case 2:
                    add();
                    break;
    
                    case 3: 
                    withdraw();
                    break;
    
                    case 4: 
                    exit();
                    break;
    
                    default:
                    alert("Please enter a number between 1 and 4.");
                    break;
    
                }
    
                function display()
                {
                    alert("Current balance is £" + balance);
                }
    
                function add()
                {
        
                    fundsAdd = parseInt(prompt("Enter the funds you would like to add"));
                    balance = balance + fundsAdd;
                    alert("Balance is now £" + balance);
    
                }
    
                function withdraw()
                {
        
                    fundsWith = parseInt(prompt("Enter the funds you would like to withdraw"));
                    balance = balance - fundsWith;
                    alert("Balance is now £" + balance);
    
                }
                
                function exit()
                {
                    alert("Thank you for using the system");
                }
    
            }while( choice != 4 )
                               
        }