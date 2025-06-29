create table if not exists customers(
    customerID number primary key,
    Cname varchar(30),
    age number,
    balance number,
    interest number,
    vip varchar(5) default 'false'
);

select * from customers;

insert into customers(customerid, Cname, age, balance, interest, vip)
values
    (101, 'John Doe', 65, 10000, 5.5, 'No'),
    (102, 'Jane Smith', 45, 15000, 6.0, 'No'),
    (103, 'Bob Lee', 70, 20000, 5.0, 'Yes');

select * from customers;

-- Scenario 1

BEGIN
    for record in (select customerID, interest 
                    from customers
                    where age > 60)
    loop
        update customers
        set interest = interest - 1
        where customerID = record.customerID;
    end loop;
    commit;
end;

select * from customers;


-- Scenario 2

begin 
    for record in (select customerID from customers where balance > 10000) 
    LOOP
        update CUSTOMERS
        set vip = 'true'
        where customerID = record.customerID;
    end loop;
    commit;
end;

select * from customers;

-- Scenario 3
create table loans
(
    loanid number primary key,
    customerid number,
    duedate date,
    foreign key(customerid) REFERENCES customers(customerid)
);

select * from loans;

insert into loans (loanid, customerid, duedate)
values
    (1, 101, SYSDATE + 10),
    (2, 102, SYSDATE + 35),
    (3, 103, SYSDATE + 10);

select * from loans;


SET SERVEROUTPUT ON;


BEGIN
    for record in (select customerid, loadid, duedate from loans where duedate <= sysdate + 30)
    LOOP
        dbms_output.putline('remainder:' || record.loadid || 'for customer' || record.customerid || 'is due on' || to_char(rec.duedate, 'dd-mm-yyyy'));
    end loop;
end;

select * from loans;
