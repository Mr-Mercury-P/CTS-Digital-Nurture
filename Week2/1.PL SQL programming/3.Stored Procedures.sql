create table accounts (
    AccountId int primary key,
    CustomerName varchar(30),
    Balance decimal(12, 2),
    AccountType varchar(20)
);

create table employees (
    EmployeeId int primary key,
    Ename varchar(30),
    salary decimal(12, 2),
    DepartmentId int
);

-- Scenario 1

CREATE PROCEDURE ProcessMntInterest as
BEGIN
    UPDATE accounts
    SET balance = balance + (balance * 0.01)
    WHERE AccountType = 'Savings';
end;
/

drop PROCEDURE ProcessMntInterest;


-- Scenario 2

create or replace procedure UpdateEmployeeBonus (
    dept_id in number,
    bonus_percent in number
) as
BEGIN
    UPDATE EMPLOYEES
    SET SALARY = SALARY + (SALARY * bonus_percent / 100)
    where DEPARTMENTID = dept_id;
end;
/

-- Scenario 3

CREATE OR REPLACE PROCEDURE TransferFunds (
    from_acc IN NUMBER,
    to_acc   IN NUMBER,
    amount   IN NUMBER
) AS
    from_balance NUMBER;
BEGIN
    SELECT Balance
    INTO from_balance
    FROM Accounts
    WHERE AccountID = from_acc
    FOR UPDATE;

    IF from_balance >= amount THEN
        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_acc;
        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_acc;

    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;
END;
/
