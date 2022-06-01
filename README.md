# Welcome to Artur's Poatek Internship Challenge!
Hi! Here is a little summary of my challenge. For the number one questions please run the code in your machine to get the answer. For the second question the **answer** and the **code** are in the [Question 2](#question-2) section of this READme.md. Hope to see you soon!

## Programming Languages

 - Question 1 - JavaScript  
 - Question 2 - postgreSQL
 
 
## How to Run 

 -  Question 1 - Run with [Node.js](nodejs.org) using the IDE of preference. (node < filename >)
 -  Question 2 - Connect and run the code with [DataGrip](https://www.jetbrains.com/datagrip/)
 
  
## Question 1  
  Please run the code in your machine and the answer will be show 
  
## Question 2 
   The answer to each question and the code used are bellow
  
  ### Q2.1  
   **Answer:** Medline, Apotheca Ltd, Pure Group, OUR Ltd, Trigen
   
   **Code:** 
    SELECT sum("Unit Price" * "Order Quantity") AS total, "Customer Names"  
    FROM sales.sales_order  
    inner join sales.customers on sales.sales_order."_CustomerID" = sales.customers."_CustomerID"  
    group by "Customer Names"  
    order by "total" DESC ;

   ### Q2.2  
   **Answer**: California 
   
   **Code:** 
    SELECT sum("Order Quantity") AS total,"State"  
    FROM sales.sales_order  
    INNER JOIN sales.store_locations ON sales.sales_order."_StoreID" = sales.store_locations."_StoreID"  
    group by "State"  
    order by "total" DESC;
	
   ### Q2.3  
   **Answer:** Wayne
   
   **Code:** 
    SELECT sum("Order Quantity") AS total, "City Name"  
    FROM sales.sales_order  
    INNER JOIN sales.store_locations on (sales.sales_order."_StoreID" = sales.store_locations."_StoreID")  
    where "State" =  'Indiana'  
    GROUP BY "City Name"  
    ORDER BY "total" DESC;

   ### Q2.4  
   **Answer:** Columbia
   
   **Code:** 
    SELECT sum(("Order Quantity" *  "Unit Price")/"Population") AS percapita, "City Name"  
    FROM sales.sales_order  
    INNER JOIN sales.store_locations on (sales.sales_order."_StoreID" = sales.store_locations."_StoreID")  
    GROUP BY "City Name"  
    ORDER BY "percapita" DESC;

   ### Q2.5  
   **Answer:** Acessories
   
   **Code:** 
    SELECT "Product Name",sum("Order Quantity") as total  
    FROM sales.sales_order  
    INNER JOIN sales.products on (sales.sales_order."_ProductID" = sales.products."_ProductID")  
    GROUP BY "Product Name"  
    order by "total" DESC;

   ### Q2.6  
   **Answer:** Festive
   
   **Code:** 
    SELECT "Product Name",sum("Order Quantity"),"Water Area"
    FROM sales.sales_order
    INNER JOIN sales.products on (sales.sales_order."_ProductID"  = sales.products."_ProductID")
    INNER JOIN sales.store_locations on (sales.sales_order."_StoreID"  = sales.store_locations."_StoreID")
    Where "Water Area"  =  852118618
    GROUP BY "Product Name", "Water Area"

   ### Q2.7 
   **Answer:** 20 days
   
   **Code:** 
   SELECT "Region", avg("DeliveryDate"  -  "OrderDate" ) as  Time
   FROM sales.sales_order
   INNER JOIN sales.store_locations on (sales.sales_order."_StoreID"  = sales.store_locations."_StoreID")
   INNER JOIN sales.regions on (sales.store_locations."StateCode"  = sales.regions."StateCode")
   group by "Region"
	   
   ### Q2.8
   **Answer:** Donald Reynolds
   
   **Code:** 
   SELECT "Sales Team", sum("Order Quantity"*("Unit Price"  -  "Unit Cost")) as profit  
   FROM sales.sales_order  
   INNER JOIN sales.sales_team on (sales.sales_order."_SalesTeamID"  = sales.sales_team."_SalesTeamID")  
   group by "Sales Team"  
   order by "profit" DESC
