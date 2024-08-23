const SlipData = [
  {
    subject: "C Programming",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
            sol: `#include <stdio.h>
#define MAX 10

int Stack[MAX], top = -1;

void create(int data)
{
    top++;
    Stack[top] = data;
}

void show()
{
    int i;
    for (i = top; i >= 0; i--)
        printf("%d	", Stack[i]);
}

int main()
{
    int data, choice;
    do
    {
        printf("Enter the data :");
        scanf("%d", &data);
        create(data);
        printf("Do you want to add more element in stack (yes-1 & no-0) :");
        scanf("%d", &choice);
    } while (choice == 1);
    printf("The stack is: ");
    show();
}`,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "c",
  },
  {
    subject: "DBMS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "sql",
  },
  {
    subject: "Web Techonology",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "html",
  },
  {
    subject: "RDBMS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "plsql",
  },
  {
    subject: "Data Structure",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a menu driven program using ‘C’ for Binary Search Tree. The menu includes:\n- Create a Binary Search Tree\n- Insert element in a Binary Search Tree\n- Display",
            marks: 20,
          },
          {
            questionId: 2,
            text: "Write a ‘C’ program to evaluate a given polynomial using function. (Use array).",
            marks: 10,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write a 'C' program to accept a string from a user and reverse it using Static
            implementation of Stack.`,
            marks: 20,
          },
          {
            questionId: 2,
            text: `Write a 'C' program to create a Circularly Doubly Linked list and display it.`,
            marks: 10,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write a program to create two singly linked lists of elements of type integer and
            find the union of the linked lists. (Accept elements in the sorted order)`,
            marks: 20,
          },
          {
            questionId: 2,
            text: `Write a 'C' program to read the adjacency matrix of a directed graph and convert
            it into an adjacency list.`,
            marks: 10,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: "Write a menu driven program using ‘C’ for Binary Search Tree. The menu includes:\n- Create a Binary Search Tree\n- Traverse it by using Inorder and Postorder traversing technique",
            marks: 20,
          },
          {
            questionId: 2,
            text: "Write a ‘C’ program to accept two polynomials and find the addition of accepted polynomials. (use array)",
            marks: 10,
          },
        ],
      },
    ],
    language: "c",
  },
  {
    subject: "Big Data",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "r",
  },
  {
    subject: "Php",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "php",
  },
  {
    subject: "Angular JS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "javascript",
  },
  {
    subject: "CPP",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "cpp",
  },
  {
    subject: "Advance Php",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "php",
  },
  {
    subject: "Node JS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "javascript",
  },
  {
    subject: "Core Java",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: `Write a ‘java’ program to display characters from ‘A’ to ‘Z’`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a ‘java’ program to copy only non-numeric data from one file to another file.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display all the vowels from a given string.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Design a screen in Java to handle the Mouse Events such as MOUSE_MOVED and MOUSE_CLICK and display the position of the Mouse_Click in a TextField`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write a ‘java’ program to check whether given number is Armstrong or not. (Use static keyword)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Define an abstract class Shape with abstract methods area () and volume (). Derive abstract class Shape into two classes Cone and Cylinder. Write a java to calculate area and volume of Cone and Cylinder.(Use Super Keyword.)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display alternate character from a given string`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program using Applet to implement a simple arithmetic calculator`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: "Write a java program to display following pattern: \n5 \n4 5 \n3 4 5 \n2 3 4 5 \n1 2 3 4 5",
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept list of file names through command line. Delete the files having extension .txt. Display name, location and size of remaining files`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept a number from user, if it zero then throw user defined Exception “Number Is Zero”, otherwise calculate the sum of first and last digit of that number. (Use static keyword).`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to display transpose of a given matrix.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display Label with text “Dr. D Y Patil College”, background color Red and font size 20 on the frame.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept details of ‘n’ cricket player (pid, pname, totalRuns,InningsPlayed, NotOuttimes). Calculate the average of all the players. Display the details of player having maximum average. (Use Array of Object)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: `Define an Interface Shape with abstract method area(). Write a java program to calculate an area of Circle and Sphere.(use final keyword)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to display the files having extension .txt from a given directory. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: `Write a java Program to display following pattern: \n1 \n0 1 \n0 1 0 \n1 0 1 0`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to validate PAN number and Mobile Number. If it is invalid then throw user defined Exception “Invalid Data”, otherwise display it.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to count the frequency of each character in a given string.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program for the following:`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: `Write a menu driven java program using command line arguments for the following:  \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write an applet application to display Table lamp. The color of lamp should get change randomly.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display each String in reverse order from a String array`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to display multiplication table of a given number into the List box by clicking on button.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept ‘n’ integers from the user & store them in an ArrayList collection. Display the elements of ArrayList collection in reverse order.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program that asks the user name, and then greets the user by name. Before outputting the user's name, convert it to upper case letters. For example, if the user's name is Raj, then the program should respond "Hello, RAJ, nice to meet you!".`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to calculate power of a number using recursion.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept the details of employee (Eno, EName, Sal) and display it on next frame using appropriate event .`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to search given name into the array, if it is found then display its index otherwise display appropriate message. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write an applet application to display smiley face.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to calculate sum of digits of a given number using recursion`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept n employee names from user. Sort them in ascending order and Display them.(Use array of object and Static keyword)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: `Write a java Program to accept ‘n’ no’s through command line and store only armstrong no’s into the array and display that array.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Define a class Product (pid, pname, price, qty). Write a function to accept the product details, display it and calculate total amount. (use array of Objects)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to calculate area of Circle, Triangle & Rectangle.(Use Method Overloading) `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to copy the data from one file into another file, while copying change the case of characters in target file and replaces all digits by ‘*’ symbol`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to display Fibonacci series using function `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Create an Applet that displays the x and y position of the cursor movement using Mouse and Keyboard. (Use appropriate listener) `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: `Write a java program using AWT to create a Frame with title “TYBBACA”, background color RED. If user clicks on close button then frame should close`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Construct a Linked List containing name: CPP, Java, Python and PHP. Then extend your java program to do the following:
\ni. Display the contents of the List using an Iterator
\nii. Display the contents of the List in reverse order using a ListIterator`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display each word from a file in reverse order`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Create a hashtable containing city name & STD code. Display the details of the hashtable. Also search for a specific city and display STD code of that city.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to calculate factorial of a number using recursion`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program for the following:
\n1. To create a file.
\n2. To rename a file.
\n3. To delete a file.
\n4. To display path of a file`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to check whether given file is hidden or not. If not then display its path, otherwise display appropriate message.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to design following Frame using Swing. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to count number of digits, spaces and characters from a file.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Create a package TYBBACA with two classes as class Student (Rno, SName, Per) with a method disp() to display details of N Students and class Teacher (TID, TName, Subject) with a method disp() to display the details of teacher who is teaching Java subject. (Make use of finalize() method and array of Object)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to check whether given string is palindrome or not.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: "Create a package named Series having three different classes to print series: \ni. Fibonacci series \nii. Cube of numbers \niii. Square of numbers \nWrite a java program to generate ‘n’ terms of the above series",
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display ASCII values of the characters from a file`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program using applet to draw Temple.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept a number from user, If it is greater than 1000 then throw user defined exception “Number is out of Range” otherwise display the factors of that number. (Use static keyword)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept directory name in TextField and display list of files and subdirectories in List Control from that directory by clicking on Button.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to count the number of integers from a given list. (Use Command line arguments). `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java Program to accept the details of 5 employees (Eno, Ename, Salary) and display it onto the JTable.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to check whether given candidate is eligible for voting or not. Handle user defined as well as system defined Exception. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program using Applet for bouncing ball. Ball should change its color for each bounce.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept a number from a user, if it is zero then throw user defined Exception “Number is Zero”. If it is non-numeric then generate an error “Number is Invalid” otherwise check whether it is palindrome or not.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to design a following GUI (Use Swing).`,
            marks: 25,
          },
        ],
      },
    ],
    language: "java",
  },

  {
    subject: "Python",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "python",
  },
  {
    subject: "MongoDB",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "json",
  },
  {
    subject: "Advance Java",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "java",
  },
  {
    subject: "Android Programming",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "java",
  },
  {
    subject: "Dot Net Framework",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "csharp",
  },
];

/* 0-c, 1-dbms, 2-web tech, 3-rdbms 4-data structure, 5-bigdata, 6-php, 7-angular js, 8-cpp, 9-advance php, 10-nodejs, 11-corejava, 12-python, 13-mongodb, 14-advance java, 15-android programming, 16-dotnot framework   */
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../src/config/firebase";
import { languages } from "monaco-sql-languages/esm/fillers/monaco-editor-core";

export async function uploadData() {
  const subjectsCollection = collection(db, "slipSubjects");

  for (const subject of SlipData) {
    const subjectDoc = doc(subjectsCollection, subject.subject);
    await setDoc(subjectDoc, {
      subject: subject.subject,
      slips: subject.slips,
      language: subject.language,
    });
  }

  console.log("Data uploaded successfully");
}
