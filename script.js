/* Java Lab Academic Portfolio – J. Vijay Raj (25EU02080)
   LAB_DATA: academic content extracted from the student's Word documents. Edit here to update the site. */
const LAB_DATA = [
 {
  "week": 1,
  "title": "Programming Language Comparison",
  "topic": "Language Comparison",
  "desc": "Comparative table of Java, C, C++, Python and JavaScript across 15 parameters.",
  "entries": [
   {
    "id": "1.1",
    "kind": "table",
    "title": "Comparative Table: Java, C, C++, Python, JavaScript",
    "cls": "",
    "topic": "Language Comparison",
    "table": [
     [
      "S.NO",
      "Parameters",
      "Java",
      "C",
      "C++",
      "Python",
      "JavaScript"
     ],
     [
      "1",
      "Language/Scripting",
      "Programming Language",
      "Programming Language",
      "Programming Language",
      "Scripting Language",
      "Scripting Language"
     ],
     [
      "2",
      "Open source/commercial",
      "Mixed",
      "Open source",
      "Open source",
      "Open source",
      "Open source"
     ],
     [
      "3",
      "Compiler or interpreter",
      "Both Interpreter and compiler",
      "Compiler",
      "Compiler",
      "Interpreter",
      "Interpreter"
     ],
     [
      "4",
      "OOP support(Yes/No)",
      "Yes",
      "No",
      "Yes",
      "Yes",
      "Yes"
     ],
     [
      "5",
      "Developer organization",
      "Sun Microsystems",
      "Bell labs",
      "ISO",
      "PSF",
      "Multi"
     ],
     [
      "6",
      "Developer",
      "James Gosling",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
      "Guido Van Rossum",
      "Brendan Eich"
     ],
     [
      "7",
      "Current major version",
      "Java 26",
      "C23",
      "C++23",
      "Python 3",
      "ECMASCRIPT 2025"
     ],
     [
      "8",
      "Primary purpose",
      "Handling big data processing",
      "Systems programming",
      "Allows code to be reused",
      "Highly readable",
      "Dynamic behavior"
     ],
     [
      "9",
      "Common applications",
      "Android development and big data systems",
      "OS and Embedded systems",
      "Game development and Graphics engines",
      "Web backends and Task automation",
      "Frontend web and Backend development"
     ],
     [
      "10",
      "Database Support",
      "JDBC",
      "Native APIs",
      "SQL and NoSQL",
      "SQLite",
      "MongoDB, Firebase etc"
     ],
     [
      "11",
      "Memory Management",
      "Automatic Garbage collection",
      "Manual",
      "Manual",
      "Automatic Garbage collection",
      "Automatic Garbage collection"
     ],
     [
      "12",
      "Security Features",
      "JVM security",
      "Limited built-in security",
      "Better type safety than C",
      "Memory-safe runtime, sandboxed libraries",
      "Browser sandboxing, same-origin policy"
     ],
     [
      "13",
      "Performance",
      "High",
      "Very high",
      "Very high",
      "Moderate",
      "Moderate"
     ],
     [
      "14",
      "Platform Independence",
      "Yes",
      "No",
      "No",
      "Yes",
      "Yes"
     ],
     [
      "15",
      "Other Important Features",
      "Multithreading, portability, rich libraries",
      "Small, efficient, low-level control",
      "Templates, STL, OOP, performance",
      "Simple syntax, huge ecosystem",
      "Asynchronous Event Handling, / First-Class Functions"
     ],
     [
      "16",
      "Ease of Learning",
      "Moderate",
      "Hard",
      "Hardest",
      "Easiest",
      "Easy to moderate"
     ],
     [
      "17",
      "Popular IDEs",
      "IntelliJ IDEA, Eclipse",
      "VS code",
      "CLion",
      "PyCharm, IDLE",
      "VS Code, WebStorm"
     ],
     [
      "18",
      "Compilation Output",
      "Bytecode",
      "Binary",
      "Binary",
      "Bytecode",
      "Raw Source"
     ],
     [
      "19",
      "Advantages",
      "Runs securely on any operating system",
      "Offers ultimate execution speed",
      "Supports powerful object-oriented programming",
      "Highly readable, English-like syntax",
      "Runs natively inside every modern web browser"
     ],
     [
      "20",
      "Limitations",
      "Consumes high system memory",
      "Lacks automatic memory management",
      "highly complex, unforgiving syntax",
      "Execution speed is slow",
      "Easily exposed to frontend security risks"
     ]
    ]
   }
  ]
 },
 {
  "week": 2,
  "title": "Java Installation: Oracle JDK & OpenJDK",
  "topic": "JDK Installation",
  "desc": "Step-by-step installation, verification and environment setup of Oracle JDK and OpenJDK.",
  "entries": [
   {
    "id": "2.1",
    "kind": "steps",
    "title": "Installation of Oracle JDK",
    "cls": "",
    "topic": "JDK Installation",
    "aim": "Install Oracle JDK (Java 25, MSI installer), verify it, and configure JAVA_HOME and PATH on Windows.",
    "steps": [
     {
      "text": "Open Google Chrome and visit the official Oracle JDK website Oracle JDK Downloads",
      "img": "assets/w2-oracle-step1.webp",
      "n": 1
     },
     {
      "text": "Click on the newest version of java JAVA 25. Click on the link of the third website which is MSI Installer.",
      "img": null,
      "n": 2
     },
     {
      "text": "Download the given version by it.",
      "img": "assets/w2-oracle-step3.webp",
      "n": 3
     },
     {
      "text": "Install the new version by clicking “Run”, “Next” and “Yes”.",
      "img": null,
      "n": 4
     },
     {
      "text": "Enter windows + R and type cmd",
      "img": "assets/w2-oracle-step5.webp",
      "n": 5
     },
     {
      "text": "It will open a Command window",
      "img": "assets/w2-oracle-step6.webp",
      "n": 6
     },
     {
      "text": "Type java –version to see the version of java",
      "img": "assets/w2-oracle-step7.webp",
      "n": 7
     },
     {
      "text": "Type javac –version to see the version of javac",
      "img": "assets/w2-oracle-step8.webp",
      "n": 8
     },
     {
      "text": "To check if the version is created open files and select Local Disk(C:)",
      "img": "assets/w2-oracle-step9.webp",
      "n": 9
     },
     {
      "text": "Then in that go to program files",
      "img": "assets/w2-oracle-step10.webp",
      "n": 10
     },
     {
      "text": "In program files open java, then you can see that it is created",
      "img": "assets/w2-oracle-step11.webp",
      "n": 11
     },
     {
      "text": "Now come back and Press windows + R and type sysdm.cpl",
      "img": "assets/w2-oracle-step12.webp",
      "n": 12
     },
     {
      "text": "Then click on the right bottom Environmental Variables in Advanced Tab",
      "img": "assets/w2-oracle-step13.webp",
      "n": 13
     },
     {
      "text": "Now near System variables Click on New",
      "img": "assets/w2-oracle-step14.webp",
      "n": 14
     },
     {
      "text": "Then a New System Variable file will Open",
      "img": "assets/w2-oracle-step15.webp",
      "n": 15
     },
     {
      "text": "Enter the Variable name and Variable value",
      "img": "assets/w2-oracle-step16.webp",
      "n": 16
     },
     {
      "text": "Now again in System Variables select the Path",
      "img": "assets/w2-oracle-step17.webp",
      "n": 17
     },
     {
      "text": "Click on new",
      "img": "assets/w2-oracle-step18.webp",
      "n": 18
     },
     {
      "text": "There we can add new file",
      "img": "assets/w2-oracle-step19.webp",
      "n": 19
     },
     {
      "text": "Enter  %JAVA_HOME%\\bin and click OK",
      "img": "assets/w2-oracle-step20.webp",
      "n": 20
     },
     {
      "text": "Now again open the command window by typing cmd",
      "img": "assets/w2-oracle-step21.webp",
      "n": 21
     },
     {
      "text": "Then there type echo %JAVA_HOME%",
      "img": "assets/w2-oracle-step22.webp",
      "n": 22
     },
     {
      "text": "You will see that it is created",
      "img": "assets/w2-oracle-step23.webp",
      "n": 23
     },
     {
      "text": "Now check the version of java by typing java --version",
      "img": "assets/w2-oracle-step24.webp",
      "n": 24
     },
     {
      "text": "Then check Javac version by typing javac --version",
      "img": "assets/w2-oracle-step25.webp",
      "n": 25
     },
     {
      "text": "Open visual studio and write code to execute and save it as Hello.java",
      "img": null,
      "n": 26
     },
     {
      "text": "Now open command window and type cd desktop, then javac Hello.java (The name of the file), then java Hello , then you get the required Output",
      "img": null,
      "n": 27
     },
     {
      "text": "We get the required output Successfully",
      "img": null,
      "n": 28
     }
    ]
   },
   {
    "id": "2.2",
    "kind": "steps",
    "title": "Installation of OpenJDK 21.0.11",
    "cls": "",
    "topic": "JDK Installation",
    "aim": "Install OpenJDK 21.0.11 (Windows x86 64-bit) and run a simple Java program.",
    "steps": [
     {
      "text": "Open a web browser and search for the OpenJDK website.",
      "img": "assets/w2-openjdk-step1.webp",
      "n": 1
     },
     {
      "text": "Go to OpenJDK downloads and install 21.0.11 for Windows x86 64-bit JDK.",
      "img": "assets/w2-openjdk-step2.webp",
      "n": 2
     },
     {
      "text": "Download Windows x86 64-bit.",
      "img": "assets/w2-openjdk-step3.webp",
      "n": 3
     },
     {
      "text": "After installation, open Command Prompt, check the Java version and update the installation path.",
      "img": "assets/w2-openjdk-step4.webp",
      "n": 4
     },
     {
      "text": "A simple program.",
      "img": "assets/w2-openjdk-step5.webp",
      "n": 5
     }
    ]
   }
  ]
 },
 {
  "week": 3,
  "title": "Java Fundamentals",
  "topic": "Java Basics",
  "desc": "Program structure, primitive data types, operators, type conversion, if-else and loops.",
  "entries": [
   {
    "num": "1",
    "id": "3.1",
    "kind": "program",
    "title": "HelloJava",
    "cls": "HelloJava",
    "topic": "Program Structure",
    "aim": "Write a Java program to display \"Hello, Java!\" and demonstrate the basic structure of a Java program.",
    "code": "public class HelloJava {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
    "img": "assets/w3-p1.webp"
   },
   {
    "num": "2",
    "id": "3.2",
    "kind": "program",
    "title": "DataTypesDemo",
    "cls": "DataTypesDemo",
    "topic": "Data Types",
    "aim": "Write a Java program to declare variables of different primitive data types (byte, short, int, long, float, double, char, and boolean) and display their values.",
    "code": "public class DataTypesDemo {\n    public static void main(String[] args) {\n        byte b = 10;\n        short s = 2000;\n        int i = 50000;\n        long l = 1000000000L;\n        float f = 12.5f;\n        double d = 123.456;\n        char c = 'A';\n        boolean flag = true;\n        System.out.println(\"Byte: \" + b);\n        System.out.println(\"Short: \" + s);\n        System.out.println(\"Int: \" + i);\n        System.out.println(\"Long: \" + l);\n        System.out.println(\"Float: \" + f);\n        System.out.println(\"Double: \" + d);\n        System.out.println(\"Char: \" + c);\n        System.out.println(\"Boolean: \" + flag);\n    }\n}",
    "img": "assets/w3-p2.webp"
   },
   {
    "num": "3",
    "id": "3.3",
    "kind": "program",
    "title": "ArithmeticOperations",
    "cls": "ArithmeticOperations",
    "topic": "Operators",
    "aim": "Write a Java program to perform arithmetic operations (addition, subtraction, multiplication, division, and modulus) on two integer variables.",
    "code": "public class ArithmeticOperations {\n    public static void main(String[] args) {\n        int a = 20;\n        int b = 6;\n        System.out.println(\"Addition = \" + (a + b));\n        System.out.println(\"Subtraction = \" + (a - b));\n        System.out.println(\"Multiplication = \" + (a * b));\n        System.out.println(\"Division = \" + (a / b));\n        System.out.println(\"Modulus = \" + (a % b));\n    }\n}",
    "img": "assets/w3-p3.webp"
   },
   {
    "num": "4",
    "id": "3.4",
    "kind": "program",
    "title": "FloatArithmetic",
    "cls": "FloatArithmetic",
    "topic": "Operators",
    "aim": "Write a Java program to perform arithmetic operations on floating-point numbers and display the results.",
    "code": "public class FloatArithmetic {\n    public static void main(String[] args) {\n        float a = 10.5f;\n        float b = 2.5f;\n        System.out.println(\"Addition = \" + (a + b));\n        System.out.println(\"Subtraction = \" + (a - b));\n        System.out.println(\"Multiplication = \" + (a * b));\n        System.out.println(\"Division = \" + (a / b));\n        System.out.println(\"Modulus = \" + (a % b));\n    }\n}",
    "img": "assets/w3-p4.webp"
   },
   {
    "num": "5",
    "id": "3.5",
    "kind": "program",
    "title": "CharacterDemo",
    "cls": "CharacterDemo",
    "topic": "Data Types",
    "aim": "Write a Java program to demonstrate character data type by displaying a character and its corresponding ASCII/Unicode value.",
    "code": "public class CharacterDemo {\n    public static void main(String[] args) {\n        char ch = 'A';\n        System.out.println(\"Character = \" + ch);\n        System.out.println(\"ASCII/Unicode Value = \" + (int) ch);\n    }\n}",
    "img": "assets/w3-p5.webp"
   },
   {
    "num": "6",
    "id": "3.6",
    "kind": "program",
    "title": "BooleanDemo",
    "cls": "BooleanDemo",
    "topic": "Data Types",
    "aim": "Write a Java program to demonstrate the use of Boolean variables and Boolean expressions.",
    "code": "public class BooleanDemo {\n    public static void main(String[] args) {\n        boolean isJavaFun = true;\n        boolean isGreater = (10 > 5);\n        System.out.println(\"isJavaFun = \" + isJavaFun);\n        System.out.println(\"10 > 5 = \" + isGreater);\n    }\n}",
    "img": "assets/w3-p6.webp"
   },
   {
    "num": "7",
    "id": "3.7",
    "kind": "program",
    "title": "VariablesDemo",
    "cls": "VariablesDemo",
    "topic": "Variables",
    "aim": "Write a Java program to declare and initialize different types of variables and display their values.",
    "code": "public class VariablesDemo {\n    public static void main(String[] args) {\n        int age = 20;\n        float height = 5.8f;\n        double salary = 25000.50;\n        char grade = 'A';\n        boolean passed = true;\n        String name = \"John\";\n        System.out.println(\"Name = \" + name);\n        System.out.println(\"Age = \" + age);\n        System.out.println(\"Height = \" + height);\n        System.out.println(\"Salary = \" + salary);\n        System.out.println(\"Grade = \" + grade);\n        System.out.println(\"Passed = \" + passed);\n    }\n}",
    "img": "assets/w3-p7.webp"
   },
   {
    "num": "8",
    "id": "3.8",
    "kind": "program",
    "title": "SwapNumbers",
    "cls": "SwapNumbers",
    "topic": "Variables",
    "aim": "Write a Java program to swap the values of two variables using a temporary variable.",
    "code": "public class SwapNumbers {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        int temp;\n        System.out.println(\"Before Swapping:\");\n        System.out.println(\"a = \" + a);\n        System.out.println(\"b = \" + b);\n        temp = a;\n        a = b;\n        b = temp;\n        System.out.println(\"After Swapping:\");\n        System.out.println(\"a = \" + a);\n        System.out.println(\"b = \" + b);\n    }\n}",
    "img": "assets/w3-p8.webp"
   },
   {
    "num": "9",
    "id": "3.9",
    "kind": "program",
    "title": "WideningTypeConversion",
    "cls": "WideningTypeConversion",
    "topic": "Type Conversion",
    "aim": "Write a Java program to demonstrate automatic (widening) type conversion between primitive data types.",
    "code": "public class WideningTypeConversion {\n    public static void main(String[] args) {\n        int num = 100;\n        double result = num; // Automatic (widening) conversion\n        System.out.println(\"Integer value = \" + num);\n        System.out.println(\"Double value = \" + result);\n    }\n}",
    "img": "assets/w3-p9.webp"
   },
   {
    "num": "10",
    "id": "3.10",
    "kind": "program",
    "title": "NarrowingTypeCasting",
    "cls": "NarrowingTypeCasting",
    "topic": "Type Conversion",
    "aim": "Write a Java program to demonstrate explicit (narrowing) type casting from one primitive data type to another.",
    "code": "public class NarrowingTypeCasting {\n    public static void main(String[] args) {\n        double num = 123.45;\n        int result = (int) num; // Explicit (narrowing) conversion\n        System.out.println(\"Double value = \" + num);\n        System.out.println(\"Integer value = \" + result);\n    }\n}",
    "img": "assets/w3-p10.webp"
   },
   {
    "num": "11",
    "id": "3.11",
    "kind": "program",
    "title": "CharAsciiConversion",
    "cls": "CharAsciiConversion",
    "topic": "Type Conversion",
    "aim": "Write a Java program to convert a character to its ASCII/Unicode value and vice versa using type casting.",
    "code": "public class CharAsciiConversion {\n    public static void main(String[] args) {\n        char ch = 'B';\n        int ascii = (int) ch;\n        System.out.println(\"Character = \" + ch);\n        System.out.println(\"ASCII/Unicode value = \" + ascii);\n        int value = 67;\n        char character = (char) value;\n        System.out.println(\"Integer value = \" + value);\n        System.out.println(\"Character = \" + character);\n    }\n}",
    "img": "assets/w3-p11.webp"
   },
   {
    "num": "12",
    "id": "3.12",
    "kind": "program",
    "title": "EvenOddCheck",
    "cls": "EvenOddCheck",
    "topic": "Control Statements",
    "aim": "Write a Java program to check whether a given number is even or odd using the if-else control statement.",
    "code": "import java.util.Scanner;\npublic class EvenOddCheck {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        int num = sc.nextInt();\n        if (num % 2 == 0) {\n            System.out.println(num + \" is Even\");\n        } else {\n            System.out.println(num + \" is Odd\");\n        }\n        sc.close();\n    }\n}",
    "img": "assets/w3-p12.webp"
   },
   {
    "num": "13",
    "id": "3.13",
    "kind": "program",
    "title": "LargestOfTwo",
    "cls": "LargestOfTwo",
    "topic": "Control Statements",
    "aim": "Write a Java program to find the largest of two numbers using the if-else statement.",
    "code": "import java.util.Scanner;\npublic class LargestOfTwo {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter first number: \");\n        int a = sc.nextInt();\n        System.out.print(\"Enter second number: \");\n        int b = sc.nextInt();\n        if (a > b) {\n            System.out.println(a + \" is the largest number\");\n        } else if (b > a) {\n            System.out.println(b + \" is the largest number\");\n        } else {\n            System.out.println(\"Both numbers are equal\");\n        }\n        sc.close();\n    }\n}",
    "img": "assets/w3-p13.webp"
   },
   {
    "num": "14",
    "id": "3.14",
    "kind": "program",
    "title": "KeywordDemo",
    "cls": "KeywordDemo",
    "topic": "Keywords & Identifiers",
    "aim": "Write a Java program to demonstrate the use of Java reserved keywords by creating valid identifiers and explaining why keywords cannot be used as variable names.",
    "code": "public class KeywordDemo {\n    public static void main(String[] args) {\n        // Valid identifiers\n        int age = 20;\n        float salary = 25000.50f;\n        char grade = 'A';\n        System.out.println(\"Age = \" + age);\n        System.out.println(\"Salary = \" + salary);\n        System.out.println(\"Grade = \" + grade);\n        System.out.println(\"\\nExplanation:\");\n        System.out.println(\"Keywords like 'class', 'if', 'public' are reserved by Java.\");\n        System.out.println(\"They have predefined meanings in the language syntax.\");\n        System.out.println(\"Therefore, they cannot be used as variable names.\");\n    }\n}",
    "img": "assets/w3-p14.webp"
   },
   {
    "num": "15",
    "id": "3.15",
    "kind": "program",
    "title": "ForLoopDemo",
    "cls": "ForLoopDemo",
    "topic": "Control Statements",
    "aim": "Write a Java program to demonstrate the use of the for loop by displaying numbers from 1 to 10.",
    "code": "public class ForLoopDemo {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(i);\n        }\n    }\n}",
    "img": "assets/w3-p15.webp"
   }
  ]
 },
 {
  "week": 6,
  "title": "Classes, Objects & Methods",
  "topic": "Object-Oriented Basics",
  "desc": "Class fundamentals, objects, constructors, this, garbage collection, overloading, static, final, nested and inner classes.",
  "entries": [
   {
    "num": "1.1",
    "id": "6.1.1",
    "kind": "program",
    "title": "Student Information System",
    "cls": "StudentInformationSystem",
    "topic": "Class Fundamentals",
    "aim": "Develop a Java program to create a Student class with data members such as Roll Number, Name, Branch, and CGPA. Create an object of the class, initialize the data, and display the student information using a method.",
    "code": "// Program 1.1: Student Information System\nclass Student {\n    // Data members\n    int rollNumber;\n    String name;\n    String branch;\n    double cgpa;\n    // Method to initialize student data\n    void setData(int rollNumber, String name, String branch, double cgpa) {\n        this.rollNumber = rollNumber;\n        this.name = name;\n        this.branch = branch;\n        this.cgpa = cgpa;\n    }\n    // Method to display student information\n    void displayData() {\n        System.out.println(\"Student Information\");\n        System.out.println(\"-------------------\");\n        System.out.println(\"Roll Number : \" + rollNumber);\n        System.out.println(\"Name        : \" + name);\n        System.out.println(\"Branch      : \" + branch);\n        System.out.println(\"CGPA        : \" + cgpa);\n    }\n}\npublic class StudentInformationSystem {\n    public static void main(String[] args) {\n        // Create Student object\n        Student student = new Student();\n        // Initialize data\n        student.setData(101, \"Rahul\", \"Computer Science\", 8.75);\n        // Display student information\n        student.displayData();\n    }\n}",
    "img": "assets/w6-1.webp"
   },
   {
    "num": "1.2",
    "id": "6.1.2",
    "kind": "program",
    "title": "Employee Information System",
    "cls": "EmployeeInformationSystem",
    "topic": "Class Fundamentals",
    "aim": "Develop a Java program to create an Employee class containing Employee ID, Name, Department, and Salary. Create an object of the class and display the employee details.",
    "code": "class Employee {\n    int employeeId;\n    String employeeName;\n    String departmentName;\n    double employeeSalary;\n    void displayDetails() {\n        System.out.println(\"Employee ID      : \" + employeeId);\n        System.out.println(\"Employee Name    : \" + employeeName);\n        System.out.println(\"Department       : \" + departmentName);\n        System.out.println(\"Salary           : ₹\" + employeeSalary);\n    }\n}\npublic class EmployeeInformationSystem {\n    public static void main(String[] args) {\n        Employee staff = new Employee();\n        staff.employeeId = 2087;\n        staff.employeeName = \"Harshini\";\n        staff.departmentName = \"Research and Development\";\n        staff.employeeSalary = 68500.75;\n        System.out.println(\"------ Employee Details ------\");\n        staff.displayDetails();\n    }\n}",
    "img": "assets/w6-2.webp"
   },
   {
    "num": "2.1",
    "id": "6.2.1",
    "kind": "program",
    "title": "Book Details",
    "cls": "BookDetails",
    "topic": "Declaring Objects",
    "aim": "Write a Java program to declare and create three objects of a Book class. Display the details of all books using object references.",
    "code": "class Book {\n    int bookId;\n    String bookTitle;\n    String authorName;\n    double bookPrice;\n    void displayBook() {\n        System.out.println(\"Book ID    : \" + bookId);\n        System.out.println(\"Title      : \" + bookTitle);\n        System.out.println(\"Author     : \" + authorName);\n        System.out.println(\"Price      : ₹\" + bookPrice);\n        System.out.println();\n    }\n}\npublic class BookDetails {\n    public static void main(String[] args) {\n        Book firstBook = new Book();\n        Book secondBook = new Book();\n        Book thirdBook = new Book();\n        firstBook.bookId = 301;\n        firstBook.bookTitle = \"Java Essentials\";\n        firstBook.authorName = \"Meera Sharma\";\n        firstBook.bookPrice = 450.50;\n        secondBook.bookId = 302;\n        secondBook.bookTitle = \"Cloud Computing Basics\";\n        secondBook.authorName = \"Arjun Patel\";\n        secondBook.bookPrice = 620.00;\n        thirdBook.bookId = 303;\n        thirdBook.bookTitle = \"Data Structures in Java\";\n        thirdBook.authorName = \"Kavya Reddy\";\n        thirdBook.bookPrice = 580.75;\n        System.out.println(\"------ Book 1 Details ------\");\n        firstBook.displayBook();\n        System.out.println(\"------ Book 2 Details ------\");\n        secondBook.displayBook();\n        System.out.println(\"------ Book 3 Details ------\");\n        thirdBook.displayBook();\n    }\n}",
    "img": "assets/w6-3.webp"
   },
   {
    "num": "2.2",
    "id": "6.2.2",
    "kind": "program",
    "title": "Array of Student Objects",
    "cls": "StudentArray",
    "topic": "Declaring Objects",
    "aim": "Write a Java program to create an array of five Student objects, accept their details from the user, and display all student information.",
    "code": "import java.util.Scanner;\nclass Student {\n    int rollNumber;\n    String studentName;\n    String branch;\n    double cgpa;\n    void displayStudent() {\n        System.out.println(\"Roll Number : \" + rollNumber);\n        System.out.println(\"Name        : \" + studentName);\n        System.out.println(\"Branch      : \" + branch);\n        System.out.println(\"CGPA        : \" + cgpa);\n        System.out.println();\n    }\n}\npublic class StudentArray {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        Student[] students = new Student[5];\n        for (int i = 0; i < students.length; i++) {\n            students[i] = new Student();\n            System.out.println(\"Enter details of Student \" + (i + 1));\n            System.out.print(\"Roll Number: \");\n            students[i].rollNumber = input.nextInt();\n            input.nextLine();\n            System.out.print(\"Name: \");\n            students[i].studentName = input.nextLine();\n            System.out.print(\"Branch: \");\n            students[i].branch = input.nextLine();\n            System.out.print(\"CGPA: \");\n            students[i].cgpa = input.nextDouble();\n            System.out.println();\n        }\n        System.out.println(\"\\n------ Student Details ------\");\n        for (int i = 0; i < students.length; i++) {\n            System.out.println(\"Student \" + (i + 1));\n            students[i].displayStudent();\n        }\n        input.close();\n    }\n}",
    "img": "assets/w6-4.webp"
   },
   {
    "num": "3.1",
    "id": "6.3.1",
    "kind": "program",
    "title": "Reference Assignment",
    "cls": "ReferenceAssignment",
    "topic": "Assigning Object Reference Variables",
    "aim": "Develop a Java program to create a Student object and assign its reference to another reference variable. Modify the object through one reference and observe the changes using the other reference.",
    "code": "class Student {\n    int rollNo;\n    String studentName;\n    double marks;\n    void displayDetails() {\n        System.out.println(\"Roll Number : \" + rollNo);\n        System.out.println(\"Name        : \" + studentName);\n        System.out.println(\"Marks       : \" + marks);\n        System.out.println();\n    }\n}\npublic class ReferenceAssignment {\n    public static void main(String[] args) {\n        Student firstReference = new Student();\n        firstReference.rollNo = 215;\n        firstReference.studentName = \"Ananya\";\n        firstReference.marks = 88.5;\n        Student secondReference = firstReference;\n        secondReference.studentName = \"Meghana\";\n        secondReference.marks = 94.0;\n        System.out.println(\"Using First Reference\");\n        firstReference.displayDetails();\n        System.out.println(\"Using Second Reference\");\n        secondReference.displayDetails();\n    }\n}",
    "img": "assets/w6-5.webp"
   },
   {
    "num": "3.2",
    "id": "6.3.2",
    "kind": "program",
    "title": "Comparing Object References",
    "cls": "CompareReferences",
    "topic": "Assigning Object Reference Variables",
    "aim": "Write a Java program to create two reference variables pointing to the same Employee object. Compare the references using the == operator and display the result.",
    "code": "class Employee {\n    int employeeId;\n    String employeeName;\n    void displayEmployee() {\n        System.out.println(\"Employee ID   : \" + employeeId);\n        System.out.println(\"Employee Name : \" + employeeName);\n    }\n}\npublic class CompareReferences {\n    public static void main(String[] args) {\n        Employee empReference1 = new Employee();\n        empReference1.employeeId = 504;\n        empReference1.employeeName = \"Karthik\";\n        Employee empReference2 = empReference1;\n        System.out.println(\"Employee Details\");\n        empReference1.displayEmployee();\n        if (empReference1 == empReference2) {\n            System.out.println(\"Both references point to the same Employee object.\");\n        } else {\n            System.out.println(\"The references point to different Employee objects.\");\n        }\n    }",
    "img": "assets/w6-6.webp"
   },
   {
    "num": "4.1",
    "id": "6.4.1",
    "kind": "program",
    "title": "Calculator Using Methods",
    "cls": "CalculatorMethods",
    "topic": "Introducing Methods",
    "aim": "Develop a Java program to create a Calculator class with methods to perform addition, subtraction, multiplication, and division of two numbers.",
    "code": "import java.util.Scanner;\nclass Calculator {\n    void addition(double num1, double num2) {\n        System.out.println(\"Addition = \" + (num1 + num2));\n    }\n    void subtraction(double num1, double num2) {\n        System.out.println(\"Subtraction = \" + (num1 - num2));\n    }\n    void multiplication(double num1, double num2) {\n        System.out.println(\"Multiplication = \" + (num1 * num2));\n    }\n    void division(double num1, double num2) {\n        if (num2 != 0) {\n            System.out.println(\"Division = \" + (num1 / num2));\n        } else {\n            System.out.println(\"Division by zero is not possible.\");\n        }\n    }\n}\npublic class CalculatorMethods {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        Calculator calc = new Calculator();\n        System.out.print(\"Enter First Number: \");\n        double firstValue = input.nextDouble();\n        System.out.print(\"Enter Second Number: \");\n        double secondValue = input.nextDouble();\n        System.out.println();\n        calc.addition(firstValue, secondValue);\n        calc.subtraction(firstValue, secondValue);\n        calc.multiplication(firstValue, secondValue);\n        calc.division(firstValue, secondValue);\n        input.close();\n    }\n}",
    "img": "assets/w6-7.webp"
   },
   {
    "num": "4.2",
    "id": "6.4.2",
    "kind": "program",
    "title": "Rectangle Operations",
    "cls": "RectangleOperations",
    "topic": "Introducing Methods",
    "aim": "Write a Java program to create a Rectangle class with methods to calculate and display the area and perimeter of a rectangle.",
    "code": "import java.util.Scanner;\nclass Rectangle {\n    double length;\n    double width;\n    void calculateArea() {\n        double area = length * width;\n        System.out.println(\"Area = \" + area);\n    }\n    void calculatePerimeter() {\n        double perimeter = 2 * (length + width);\n        System.out.println(\"Perimeter = \" + perimeter);\n    }\n}\npublic class RectangleOperations {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        Rectangle rect = new Rectangle();\n        System.out.print(\"Enter Length: \");\n        rect.length = scanner.nextDouble();\n        System.out.print(\"Enter Width: \");\n        rect.width = scanner.nextDouble();\n        System.out.println();\n        rect.calculateArea();\n        rect.calculatePerimeter();\n        scanner.close();\n    }\n}",
    "img": "assets/w6-8.webp"
   },
   {
    "num": "5.1",
    "id": "6.5.1",
    "kind": "program",
    "title": "Student Constructors",
    "cls": "StudentConstructors",
    "topic": "Constructors",
    "aim": "Develop a Java program to demonstrate the use of default and parameterized constructors for initializing student information.",
    "code": "class Student {\n    int studentId;\n    String studentName;\n    String course;\n    // Default Constructor\n    Student() {\n        studentId = 1001;\n        studentName = \"Lavanya\";\n        course = \"Computer Science\";\n    }\n    // Parameterized Constructor\n    Student(int id, String name, String dept) {\n        studentId = id;\n        studentName = name;\n        course = dept;\n    }\n    void displayDetails() {\n        System.out.println(\"Student ID   : \" + studentId);\n        System.out.println(\"Student Name : \" + studentName);\n        System.out.println(\"Course       : \" + course);\n        System.out.println();\n    }\n}\npublic class StudentConstructors {\n    public static void main(String[] args) {\n        Student studentOne = new Student();\n        Student studentTwo = new Student(1002, \"Rithvik\", \"Artificial Intelligence\");\n        System.out.println(\"Student Using Default Constructor\");\n        studentOne.displayDetails();\n        System.out.println(\"Student Using Parameterized Constructor\");\n        studentTwo.displayDetails();\n    }\n}",
    "img": "assets/w6-9.webp"
   },
   {
    "num": "5.2",
    "id": "6.5.2",
    "kind": "program",
    "title": "Constructor Overloading",
    "cls": "ConstructorOverloading",
    "topic": "Constructors",
    "aim": "Write a Java program to demonstrate constructor overloading in a BankAccount class by creating objects using different constructors.",
    "code": "class BankAccount {\n    int accountNumber;\n    String accountHolder;\n    double balance;\n    // Default Constructor\n    BankAccount() {\n        accountNumber = 500101;\n        accountHolder = \"Sowmya\";\n        balance = 0.0;\n    }\n    // Constructor with two parameters\n    BankAccount(int accNo, String holderName) {\n        accountNumber = accNo;\n        accountHolder = holderName;\n        balance = 0.0;\n    }\n    // Constructor with three parameters\n    BankAccount(int accNo, String holderName, double amount) {\n        accountNumber = accNo;\n        accountHolder = holderName;\n        balance = amount;\n    }\n    void displayAccount() {\n        System.out.println(\"Account Number : \" + accountNumber);\n        System.out.println(\"Account Holder : \" + accountHolder);\n        System.out.println(\"Balance        : ₹\" + balance);\n        System.out.println();\n    }\n}\npublic class ConstructorOverloading {\n    public static void main(String[] args) {\n        BankAccount accountOne = new BankAccount();\n        BankAccount accountTwo = new BankAccount(500102, \"Nikhil\");\n        BankAccount accountThree = new BankAccount(500103, \"Harika\", 25000.50);\n        System.out.println(\"Default Constructor\");\n        accountOne.displayAccount();\n        System.out.println(\"Two-Parameter Constructor\");\n        accountTwo.displayAccount();\n        System.out.println(\"Three-Parameter Constructor\");\n        accountThree.displayAccount();\n    }\n}",
    "img": "assets/w6-10.webp"
   },
   {
    "num": "6.1",
    "id": "6.6.1",
    "kind": "program",
    "title": "Using this Keyword",
    "cls": "ThisKeywordDemo",
    "topic": "The this Keyword",
    "aim": "Develop a Java program to demonstrate the use of the this keyword to distinguish instance variables from local variables.",
    "code": "class Employee {\n    int employeeId;\n    String employeeName;\n    double salary;\n    Employee(int employeeId, String employeeName, double salary) {\n        this.employeeId = employeeId;\n        this.employeeName = employeeName;\n        this.salary = salary;\n    }\n    void displayDetails() {\n        System.out.println(\"Employee ID   : \" + employeeId);\n        System.out.println(\"Employee Name : \" + employeeName);\n        System.out.println(\"Salary        : ₹\" + salary);\n    }\n}\npublic class ThisKeywordDemo {\n    public static void main(String[] args) {\n        Employee staff = new Employee(305, \"Pranav\", 48500.75);\n        staff.displayDetails();\n    }\n}",
    "img": "assets/w6-11.webp"
   },
   {
    "num": "6.2",
    "id": "6.6.2",
    "kind": "program",
    "title": "Constructor Chaining",
    "cls": "ConstructorChainingDemo",
    "topic": "The this Keyword",
    "aim": "Write a Java program to demonstrate constructor chaining using the this() constructor in a Student class.",
    "code": "class Student {\n    int rollNumber;\n    String studentName;\n    String department;\n    Student() {\n        this(121, \"Vaishnavi\", \"Cyber Security\");\n        System.out.println(\"Default Constructor Executed\");\n    }\n    Student(int rollNumber, String studentName, String department) {\n        this.rollNumber = rollNumber;\n        this.studentName = studentName;\n        this.department = department;\n    }\n    void displayDetails() {\n        System.out.println(\"Roll Number : \" + rollNumber);\n        System.out.println(\"Name        : \" + studentName);\n        System.out.println(\"Department  : \" + department);\n    }\n}\npublic class ConstructorChainingDemo {\n    public static void main(String[] args) {\n        Student student = new Student();\n        System.out.println();\n        student.displayDetails();\n    }\n}",
    "img": "assets/w6-12.webp"
   },
   {
    "num": "7.1",
    "id": "6.7.1",
    "kind": "program",
    "title": "Demonstrating Garbage Collection",
    "cls": "GarbageCollectionDemo",
    "topic": "Garbage Collection",
    "aim": "Develop a Java program to create multiple objects, make them eligible for garbage collection, and invoke System.gc().",
    "code": "class Laptop {\n    String modelName;\n    Laptop(String modelName) {\n        this.modelName = modelName;\n    }\n    protected void finalize() {\n        System.out.println(modelName + \" object is garbage collected.\");\n    }\n}\npublic class GarbageCollectionDemo {\n    public static void main(String[] args) {\n        Laptop laptop1 = new Laptop(\"Dell Inspiron\");\n        Laptop laptop2 = new Laptop(\"HP Pavilion\");\n        Laptop laptop3 = new Laptop(\"Lenovo ThinkPad\");\n        laptop1 = null;\n        laptop2 = null;\n        laptop3 = null;\n        System.gc();\n        System.out.println(\"Garbage Collection Requested.\");\n    }\n}",
    "img": null
   },
   {
    "num": "7.2",
    "id": "6.7.2",
    "kind": "program",
    "title": "Object Eligibility for Garbage Collection",
    "cls": "ObjectEligibility",
    "topic": "Garbage Collection",
    "aim": "Write a Java program to demonstrate different ways of making objects eligible for garbage collection, such as null assignment, reassignment, and anonymous objects.",
    "code": "class Mobile {\n    String brand;\n    Mobile(String brand) {\n        this.brand = brand;\n    }\n    protected void finalize() {\n        System.out.println(brand + \" object is garbage collected.\");\n    }\n}\npublic class ObjectEligibility {\n    public static void main(String[] args) {\n        // Method 1: Null Assignment\n        Mobile phone1 = new Mobile(\"Samsung\");\n        phone1 = null;\n        // Method 2: Reassignment\n        Mobile phone2 = new Mobile(\"Realme\");\n        phone2 = new Mobile(\"OnePlus\");\n        // Method 3: Anonymous Object\n        new Mobile(\"Vivo\");\n        System.gc();\n        System.out.println(\"Objects are eligible for Garbage Collection.\");\n    }\n}\nExperiment 8: Method Overloading",
    "img": null
   },
   {
    "num": "8.1",
    "id": "6.8.1",
    "kind": "program",
    "title": "Overloading Arithmetic Methods",
    "cls": "Arithmetic",
    "topic": "Method Overloading",
    "aim": "Develop a Java program to overload the add() method for different parameter lists.",
    "code": "class Arithmetic {\n    // Add two integers\n    int add(int a, int b) {\n        return a + b;\n    }\n    // Add three integers\n    int add(int a, int b, int c) {\n        return a + b + c;\n    }\n    // Add two double values\n    double add(double a, double b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        Arithmetic obj = new Arithmetic();\n        System.out.println(\"Sum of two integers: \" + obj.add(10, 20));\n        System.out.println(\"Sum of three integers: \" + obj.add(10, 20, 30));\n        System.out.println(\"Sum of two doubles: \" + obj.add(10.5, 20.5));\n    }\n}",
    "img": "assets/w6-15.webp"
   },
   {
    "num": "8.2",
    "id": "6.8.2",
    "kind": "program",
    "title": "Overloading Area Methods",
    "cls": "Area",
    "topic": "Method Overloading",
    "aim": "Write a Java program to overload the area() method to calculate the area of a circle, rectangle, and square.",
    "code": "class Area {\n    // Area of a circle\n    double area(double radius) {\n        return Math.PI * radius * radius;\n    }\n    // Area of a rectangle\n    int area(int length, int breadth) {\n        return length * breadth;\n    }\n    // Area of a square\n    int area(int side) {\n        return side * side;\n    }\n    public static void main(String[] args) {\n        Area obj = new Area();\n        System.out.println(\"Area of circle: \" + obj.area(5.0));\n        System.out.println(\"Area of rectangle: \" + obj.area(10, 5));\n        System.out.println(\"Area of square: \" + obj.area(6));\n    }\n}",
    "img": "assets/w6-16.webp"
   },
   {
    "num": "9.1",
    "id": "6.9.1",
    "kind": "program",
    "title": "Passing Student Object",
    "cls": "Student",
    "topic": "Using Objects as Parameters",
    "aim": "Develop a Java program to pass a Student object as a parameter to a method and display the student details.",
    "code": "class Student {\n    String name;\n    int rollNo;\n    int marks;\n    Student(String name, int rollNo, int marks) {\n        this.name = name;\n        this.rollNo = rollNo;\n        this.marks = marks;\n    }\n    void displayStudent(Student s) {\n        System.out.println(\"Student Name: \" + s.name);\n        System.out.println(\"Roll Number: \" + s.rollNo);\n        System.out.println(\"Marks: \" + s.marks);\n    }\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Rahul\", 101, 85);\n        s1.displayStudent(s1);\n    }\n}",
    "img": "assets/w6-17.webp"
   },
   {
    "num": "9.2",
    "id": "6.9.2",
    "kind": "program",
    "title": "Comparing Employee Salaries",
    "cls": "Employee",
    "topic": "Using Objects as Parameters",
    "aim": "Write a Java program to pass two Employee objects to a method that compares their salaries and displays the employee with the higher salary.",
    "code": "class Employee {\n    String name;\n    double salary;\n    Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n    static void compareSalary(Employee e1, Employee e2) {\n        if (e1.salary > e2.salary) {\n            System.out.println(\"Employee with higher salary: \" + e1.name);\n            System.out.println(\"Salary: \" + e1.salary);\n        } else if (e2.salary > e1.salary) {\n            System.out.println(\"Employee with higher salary: \" + e2.name);\n            System.out.println(\"Salary: \" + e2.salary);\n        } else {\n            System.out.println(\"Both employees have the same salary.\");\n        }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee(\"Ravi\", 45000);\n        Employee e2 = new Employee(\"Kiran\", 55000);\n        compareSalary(e1, e2);\n    }\n}",
    "img": "assets/w6-18.webp"
   },
   {
    "num": "10.1",
    "id": "6.10.1",
    "kind": "program",
    "title": "Returning a Student Object",
    "cls": "Student",
    "topic": "Returning Objects",
    "aim": "Develop a Java program in which a method creates and returns a Student object. Display the returned object's details.",
    "code": "class Student {\n    String name;\n    int rollNo;\n    int marks;\n    Student(String name, int rollNo, int marks) {\n        this.name = name;\n        this.rollNo = rollNo;\n        this.marks = marks;\n    }\n    static Student createStudent() {\n        Student s = new Student(\"Anil\", 102, 90);\n        return s;\n    }\n    void display() {\n        System.out.println(\"Student Name: \" + name);\n        System.out.println(\"Roll Number: \" + rollNo);\n        System.out.println(\"Marks: \" + marks);\n    }\n    public static void main(String[] args) {\n        Student s1 = createStudent();\n        System.out.println(\"Student Details:\");\n        s1.display();\n    }\n}",
    "img": "assets/w6-19.webp"
   },
   {
    "num": "10.2",
    "id": "6.10.2",
    "kind": "program",
    "title": "Returning a Bank Account Object",
    "cls": "BankAccount",
    "topic": "Returning Objects",
    "aim": "Write a Java program in which a method updates the balance of a BankAccount object and returns the updated object.",
    "code": "class BankAccount {\n    String accountHolder;\n    double balance;\n    BankAccount(String accountHolder, double balance) {\n        this.accountHolder = accountHolder;\n        this.balance = balance;\n    }\n    static BankAccount updateBalance(BankAccount account, double amount) {\n        account.balance = account.balance + amount;\n        return account;\n    }\n    void display() {\n        System.out.println(\"Account Holder: \" + accountHolder);\n        System.out.println(\"Updated Balance: \" + balance);\n    }\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount(\"Suresh\", 10000);\n        BankAccount updatedAccount = updateBalance(account, 5000);\n        System.out.println(\"Bank Account Details:\");\n        updatedAccount.display();\n    }\n}",
    "img": "assets/w6-20.webp"
   },
   {
    "num": "11.1",
    "id": "6.11.1",
    "kind": "program",
    "title": "Static Variable",
    "cls": "Student",
    "topic": "Understanding static",
    "aim": "Develop a Java program to count the total number of Student objects created using a static variable.",
    "code": "class Student {\n    String name;\n    static int count = 0;\n    Student(String name) {\n        this.name = name;\n        count++;\n    }\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Aarav\");\n        Student s2 = new Student(\"Meera\");\n        Student s3 = new Student(\"Vihaan\");\n        Student s4 = new Student(\"Ishita\");\n        System.out.println(\"Student 1: \" + s1.name);\n        System.out.println(\"Student 2: \" + s2.name);\n        System.out.println(\"Student 3: \" + s3.name);\n        System.out.println(\"Student 4: \" + s4.name);\n        System.out.println(\"Total objects created: \" + Student.count);\n    }\n}",
    "img": "assets/w6-21.webp"
   },
   {
    "num": "11.2",
    "id": "6.11.2",
    "kind": "program",
    "title": "Static Methods",
    "cls": "MathUtility",
    "topic": "Understanding static",
    "aim": "Write a Java program to create a utility class containing static methods for calculating the square, cube, and factorial of a number.",
    "code": "class MathUtility {\n    static int square(int n) {\n        return n * n;\n    }\n    static int cube(int n) {\n        return n * n * n;\n    }\n    static int factorial(int n) {\n        int fact = 1;\n        for (int i = 1; i <= n; i++) {\n            fact = fact * i;\n        }\n        return fact;\n    }\n    public static void main(String[] args) {\n        int number = 6;\n        System.out.println(\"Number: \" + number);\n        System.out.println(\"Square: \" + square(number));\n        System.out.println(\"Cube: \" + cube(number));\n        System.out.println(\"Factorial: \" + factorial(number));\n    }\n}",
    "img": "assets/w6-22.webp"
   },
   {
    "num": "12.1",
    "id": "6.12.1",
    "kind": "program",
    "title": "Final Keyword",
    "cls": "FinalDemo",
    "topic": "Introducing final",
    "aim": "Develop a Java program to demonstrate the use of final variables, final methods, and final classes.",
    "code": "class Vehicle {\n    final int wheels = 4;\n    final void displayWheels() {\n        System.out.println(\"Number of wheels: \" + wheels);\n    }\n}\nfinal class Car extends Vehicle {\n    String model = \"Hyundai i20\";\n    void displayCar() {\n        System.out.println(\"Car Model: \" + model);\n    }\n}\nclass FinalDemo {\n    public static void main(String[] args) {\n        Car c = new Car();\n        System.out.println(\"Final variable value: \" + c.wheels);\n        c.displayWheels();\n        c.displayCar();\n    }\n}",
    "img": "assets/w6-23.webp"
   },
   {
    "num": "12.2",
    "id": "6.12.2",
    "kind": "program",
    "title": "Blank Final Variable",
    "cls": "Employee",
    "topic": "Introducing final",
    "aim": "Write a Java program to initialize a blank final variable through a constructor and use it to assign a unique employee ID.",
    "code": "class Employee {\n    final int employeeId;\n    String name;\n    Employee(int id, String name) {\n        employeeId = id;\n        this.name = name;\n    }\n    void display() {\n        System.out.println(\"Employee ID: \" + employeeId);\n        System.out.println(\"Employee Name: \" + name);\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee(5047, \"Nikhil\");\n        Employee e2 = new Employee(6183, \"Tanvi\");\n        System.out.println(\"Employee 1 Details:\");\n        e1.display();\n        System.out.println(\"\\nEmployee 2 Details:\");\n        e2.display();\n    }\n}",
    "img": "assets/w6-24.webp"
   },
   {
    "num": "13.1",
    "id": "6.13.1",
    "kind": "program",
    "title": "College and Department",
    "cls": "Department",
    "topic": "Experiment 13",
    "aim": "Develop a Java program to create a College class containing a static nested Department class. Display the department details.",
    "code": "class College {\n    static class Department {\n        String name;\n        String hod;\n        int students;\n        Department(String name, String hod, int students) {\n            this.name = name;\n            this.hod = hod;\n            this.students = students;\n        }\n        void display() {\n            System.out.println(\"Department: \" + name);\n            System.out.println(\"Head of Department: \" + hod);\n            System.out.println(\"Number of Students: \" + students);\n        }\n    }\n    public static void main(String[] args) {\n        College.Department d =\n        new College.Department(\"Computer Science\", \"Dr. Kavya\", 72);\n        System.out.println(\"College Department Details\");\n        d.display();\n    }\n}",
    "img": "assets/w6-25.webp"
   },
   {
    "num": "13.2",
    "id": "6.13.2",
    "kind": "program",
    "title": "Employee Address",
    "cls": "Address",
    "topic": "Experiment 13",
    "aim": "Write a Java program to create an Employee class with a static nested Address class and demonstrate accessing the nested class from the main method.",
    "code": "class Employee {\n    String name = \"Rohan\";\n    static class Address {\n        String city;\n        String state;\n        Address(String city, String state) {\n            this.city = city;\n            this.state = state;\n        }\n        void displayAddress() {\n            System.out.println(\"City: \" + city);\n            System.out.println(\"State: \" + state);\n        }\n    }\n    public static void main(String[] args) {\n        Employee.Address address =\n        new Employee.Address(\"Mysuru\", \"Karnataka\");\n        System.out.println(\"Employee Name: Rohan\");\n        address.displayAddress();\n    }\n}",
    "img": "assets/w6-26.webp"
   },
   {
    "num": "14.1",
    "id": "6.14.1",
    "kind": "program",
    "title": "Student Address",
    "cls": "Address",
    "topic": "Inner Classes",
    "aim": "Develop a Java program to create a Student class containing an inner Address class. Display the student and address information.",
    "code": "class Student {\n    String name;\n    int rollNo;\n    Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n    class Address {\n        String city;\n        String state;\n        Address(String city, String state) {\n            this.city = city;\n            this.state = state;\n        }\n        void display() {\n            System.out.println(\"Student Name: \" + name);\n            System.out.println(\"Roll Number: \" + rollNo);\n            System.out.println(\"City: \" + city);\n            System.out.println(\"State: \" + state);\n        }\n    }\n    public static void main(String[] args) {\n        Student s = new Student(\"Diya\", 214);\n        Student.Address a = s.new Address(\"Pune\", \"Maharashtra\");\n        a.display();\n    }\n}",
    "img": "assets/w6-27.webp"
   },
   {
    "num": "14.2",
    "id": "6.14.2",
    "kind": "program",
    "title": "Library Management",
    "cls": "Book",
    "topic": "Inner Classes",
    "aim": "Write a Java program to create a Library class containing an inner Book class. Demonstrate how the inner class accesses the members of the outer class.",
    "code": "class Library {\n    String libraryName = \"City Central Library\";\n    String location = \"Vijayawada\";\n    class Book {\n        String title;\n        String author;\n        Book(String title, String author) {\n            this.title = title;\n            this.author = author;\n        }\n        void display() {\n            System.out.println(\"Library: \" + libraryName);\n            System.out.println(\"Location: \" + location);\n            System.out.println(\"Book Title: \" + title);\n            System.out.println(\"Author: \" + author);\n        }\n    }\n    public static void main(String[] args) {\n        Library library = new Library();\n        Library.Book book =\n        library.new Book(\"The Alchemist\", \"Paulo Coelho\");\n        book.display();\n    }\n}",
    "img": "assets/w6-28.webp"
   }
  ]
 },
 {
  "week": 7,
  "title": "Strings & Inheritance",
  "topic": "Strings",
  "desc": "String constructors, StringBuffer and StringTokenizer, followed by basic inheritance and the super keyword.",
  "entries": [
   {
    "num": "1",
    "id": "7.1",
    "kind": "program",
    "title": "String Constructors",
    "cls": "StringConstructors",
    "topic": "Strings",
    "aim": "Write a Java program to demonstrate different ways of creating and initializing String objects using various String constructors.",
    "req": [
     "Create a String using a string literal.",
     "Create a String using new String().",
     "Create a String from a character array.",
     "Create a String from a byte array.",
     "Display all the created strings.",
     "Demonstrate the difference between String objects created using literals and new."
    ],
    "code": "import java.util.Arrays;\nclass StringConstructors {\n    public static void main(String[] args) {\n        // String using string literal\n        String s1 = \"Java Programming\";\n        // String using new String()\n        String s2 = new String(\"Object Oriented\");\n        // String from character array\n        char[] chars = {'C', 'o', 'd', 'i', 'n', 'g'};\n        String s3 = new String(chars);\n        // String from byte array\n        byte[] bytes = {72, 101, 108, 108, 111};\n        String s4 = new String(bytes);\n        // Display strings\n        System.out.println(\"String using literal: \" + s1);\n        System.out.println(\"String using new String(): \" + s2);\n        System.out.println(\"String from character array: \" + s3);\n        System.out.println(\"String from byte array: \" + s4);\n        // Demonstrating difference between literal and new\n        String s5 = \"Java\";\n        String s6 = new String(\"Java\");\n        System.out.println(\"\\nLiteral and new String comparison:\");\n        System.out.println(\"Using == : \" + (s5 == s6));\n        System.out.println(\"Using equals() : \" + s5.equals(s6));\n    }\n}",
    "img": "assets/w7-1.webp"
   },
   {
    "num": "2",
    "id": "7.2",
    "kind": "program",
    "title": "StringBuffer Class",
    "cls": "StringBufferDemo",
    "topic": "Strings",
    "aim": "Write a Java program to demonstrate the functionality of the StringBuffer class by performing various mutable string operations.",
    "req": [
     "Create a StringBuffer object.",
     "Append text to the buffer.",
     "Insert text at a specified position.",
     "Replace a portion of the string.",
     "Delete characters from the buffer.",
     "Reverse the contents.",
     "Display the current length and capacity of the StringBuffer."
    ],
    "code": "class StringBufferDemo {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Core Java\");\n        System.out.println(\"Initial String: \" + sb);\n        // Append\n        sb.append(\" Lab\");\n        System.out.println(\"After append: \" + sb);\n        // Insert\n        sb.insert(5, \"Advanced \");\n        System.out.println(\"After insert: \" + sb);\n        // Replace\n        sb.replace(0, 4, \"Java\");\n        System.out.println(\"After replace: \" + sb);\n        // Delete\n        sb.delete(5, 14);\n        System.out.println(\"After delete: \" + sb);\n        // Reverse\n        sb.reverse();\n        System.out.println(\"After reverse: \" + sb);\n        // Length and capacity\n        System.out.println(\"Length: \" + sb.length());\n        System.out.println(\"Capacity: \" + sb.capacity());\n    }\n}",
    "img": "assets/w7-2.webp"
   },
   {
    "num": "3",
    "id": "7.3",
    "kind": "program",
    "title": "StringTokenizer Class",
    "cls": "StringTokenizerDemo",
    "topic": "Strings",
    "aim": "Write a Java program to tokenize a given sentence using the StringTokenizer class and display each individual token.",
    "req": [
     "Read a sentence from the user.",
     "Use StringTokenizer to split the sentence into words.",
     "Display each token separately.",
     "Display the total number of tokens.",
     "Repeat the operation using a user-specified delimiter."
    ],
    "code": "import java.util.Scanner;\nimport java.util.StringTokenizer;\nclass StringTokenizerDemo {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a sentence: \");\n        String sentence = sc.nextLine();\n        StringTokenizer st = new StringTokenizer(sentence);\n        System.out.println(\"\\nTokens:\");\n        while (st.hasMoreTokens()) {\n            System.out.println(st.nextToken());\n        }\n        System.out.println(\"Total number of tokens: \" + st.countTokens());\n        System.out.print(\"\\nEnter a delimiter: \");\n        String delimiter = sc.nextLine();\n        StringTokenizer st2 = new StringTokenizer(sentence, delimiter);\n        System.out.println(\"\\nTokens using delimiter '\" + delimiter + \"':\");\n        int count = 0;\n        while (st2.hasMoreTokens()) {\n            System.out.println(st2.nextToken());\n            count++;\n        }\n        System.out.println(\"Total tokens: \" + count);\n        sc.close();\n    }\n}",
    "img": "assets/w7-3.webp"
   },
   {
    "num": "4",
    "id": "7.4",
    "kind": "program",
    "title": "Basic Inheritance",
    "cls": "Student",
    "topic": "Inheritance",
    "aim": "Write a Java program to demonstrate single inheritance by creating a superclass containing common properties and methods and a subclass that inherits and extends the functionality of the superclass.",
    "req": [
     "Create a superclass Person with attributes such as name and age.",
     "Define a method to display the person details.",
     "Create a subclass Student that inherits from Person.",
     "Add student-specific attributes such as roll number and branch.",
     "Display all details using the subclass object."
    ],
    "code": "class Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    void displayPerson() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n    }\n}\nclass Student extends Person {\n    int rollNo;\n    String branch;\n    Student(String name, int age, int rollNo, String branch) {\n        super(name, age);\n        this.rollNo = rollNo;\n        this.branch = branch;\n    }\n    void displayStudent() {\n        displayPerson();\n        System.out.println(\"Roll Number: \" + rollNo);\n        System.out.println(\"Branch: \" + branch);\n    }\n    public static void main(String[] args) {\n        Student s = new Student(\"Sneha\", 19, 327, \"Information Technology\");\n        System.out.println(\"Student Details\");\n        System.out.println(\"----------------\");\n        s.displayStudent();\n    }\n}",
    "img": "assets/w7-4.webp"
   },
   {
    "num": "5",
    "id": "7.5",
    "kind": "program",
    "title": "Using super Keyword",
    "cls": "Manager",
    "topic": "Inheritance",
    "aim": "Write a Java program to demonstrate the use of the super keyword for accessing superclass variables, methods, and constructors.",
    "req": [
     "Create a superclass Employee with appropriate variables and methods.",
     "Create a subclass Manager.",
     "Use super to access a superclass variable.",
     "Use super to invoke a superclass method.",
     "Use super() to invoke the superclass constructor.",
     "Display the complete employee and manager details."
    ],
    "code": "class Employee {\n    String name;\n    double salary;\n    Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n    void displayDetails() {\n        System.out.println(\"Employee Name: \" + name);\n        System.out.println(\"Salary: \" + salary);\n    }\n}\nclass Manager extends Employee {\n    String department;\n    Manager(String name, double salary, String department) {\n        super(name, salary);\n        this.department = department;\n    }\n    void displayDetails() {\n        System.out.println(\"Manager Details\");\n        System.out.println(\"----------------\");\n        // Access superclass variable\n        System.out.println(\"Name using super: \" + super.name);\n        // Invoke superclass method\n        super.displayDetails();\n        System.out.println(\"Department: \" + department);\n    }\n    public static void main(String[] args) {\n        Manager m = new Manager(\"Arjun\", 68500.50, \"Finance\");\n        m.displayDetails();\n    }\n}",
    "img": "assets/w7-5.webp"
   }
  ]
 },
 {
  "week": 8,
  "title": "Inheritance & Polymorphism",
  "topic": "Inheritance",
  "desc": "Single and multilevel inheritance, super, method overriding, dynamic method dispatch and constructor order.",
  "entries": [
   {
    "num": "1",
    "id": "8.1",
    "kind": "program",
    "title": "Single Inheritance",
    "cls": "SingleInheritance",
    "topic": "Inheritance",
    "aim": "",
    "code": "class Person {\n    String name;\n    int age;\n    void getPersonDetails(String n, int a) {\n        name = n;\n        age = a;\n    }\n    void displayPerson() {\n        System.out.println(\"Name   : \" + name);\n        System.out.println(\"Age    : \" + age);\n    }\n}\nclass Student extends Person {\n    int rollNo;\n    String branch;\n    void getStudentDetails(int r, String b) {\n        rollNo = r;\n        branch = b;\n    }\n    void displayStudent() {\n        displayPerson();\n        System.out.println(\"Roll No: \" + rollNo);\n        System.out.println(\"Branch : \" + branch);\n    }\n    public class SingleInheritance {\n        public static void main(String[] args) {\n            Student s = new Student();\n            s.getPersonDetails(\"ramesh\", 19);\n            s.getStudentDetails(011, \"AI&ML\");\n            System.out.println(\"Student Details:\");\n            s.displayStudent();\n        }\n    }",
    "img": "assets/w8-1.webp"
   },
   {
    "num": "2",
    "id": "8.2",
    "kind": "program",
    "title": "Using super Keyword",
    "cls": "SuperKeywordDemo",
    "topic": "Inheritance",
    "aim": "",
    "code": "class Vehicle {\n    int speed = 80;\n    void display() {\n        System.out.println(\"Vehicle Speed: \" + speed);\n    }\n}\nclass Car extends Vehicle {\n    String model = \"Toyota\";\n    void display() {\n        System.out.println(\"Car Model: \" + model);\n        System.out.println(\"Vehicle Speed: \" + super.speed);\n        super.display();\n    }\n}\npublic class SuperKeywordDemo {\n    public static void main(String[] args) {\n        Car c = new Car();\n        c.display();\n    }\n}",
    "img": "assets/w8-2.webp"
   },
   {
    "num": "3",
    "id": "8.3",
    "kind": "program",
    "title": "Multilevel Inheritance",
    "cls": "MultilevelInheritance",
    "topic": "Inheritance",
    "aim": "",
    "code": "class Person {\n    String name;\n    int age;\n    void getPersonDetails(String n, int a) {\n        name = n;\n        age = a;\n    }\n}\nclass Employee extends Person {\n    int empId;\n    String designation;\n    void getEmployeeDetails(int id, String d) {\n        empId = id;\n        designation = d;\n    }\n}\nclass Manager extends Employee {\n    String department;\n    void getManagerDetails(String dept) {\n        department = dept;\n    }\n    void displayDetails() {\n        System.out.println(\"Name        : \" + name);\n        System.out.println(\"Age         : \" + age);\n        System.out.println(\"Employee ID : \" + empId);\n        System.out.println(\"Designation : \" + designation);\n        System.out.println(\"Department  : \" + department);\n    }\n}\npublic class MultilevelInheritance{\n    public static void main(String[] args) {\n        Manager m = new Manager();\n        m.getPersonDetails(\"meghana\", 22);\n        m.getEmployeeDetails(945, \"Manager\");\n        m.getManagerDetails(\"CSE\");\n        m.displayDetails();\n    }",
    "img": "assets/w8-3.webp"
   },
   {
    "num": "4",
    "id": "8.4",
    "kind": "program",
    "title": "Method Overriding",
    "cls": "MethodOverridingDemo",
    "topic": "Polymorphism",
    "aim": "",
    "code": "class Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\nclass Cat extends Animal {\n    void sound() {\n        System.out.println(\"Cat meows\");\n    }\n}\npublic class MethodOverridingDemo {\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.sound();\n        a2.sound();\n    }\n}",
    "img": "assets/w8-4.webp"
   },
   {
    "num": "5",
    "id": "8.5",
    "kind": "program",
    "title": "Dynamic Method Dispatch",
    "cls": "DynamicMethodDispatchDemo",
    "topic": "Polymorphism",
    "aim": "",
    "code": "class Shape {\n    void draw() {\n        System.out.println(\"Drawing Shape\");\n    }\n}\nclass Circle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing Circle\");\n    }\n}\nclass Rectangle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing Rectangle\");\n    }\n}\nclass Triangle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing Triangle\");\n    }\n}\npublic class DynamicMethodDispatchDemo {\n    public static void main(String[] args) {\n        Shape s;\n        s = new Circle();\n        s.draw();\n        s = new Rectangle();\n        s.draw();\n        s = new Triangle();\n        s.draw();\n    }\n}",
    "img": "assets/w8-5.webp"
   },
   {
    "num": "6",
    "id": "8.6",
    "kind": "program",
    "title": "super with Method Overriding",
    "cls": "MultilevelSalaryDemo",
    "topic": "Polymorphism",
    "aim": "",
    "code": "class Employee {\n    double basicSalary = 30000;\n}\nclass Developer extends Employee {\n    double programmingAllowance = 5000;\n}\nclass SeniorDeveloper extends Developer {\n    double projectAllowance = 10000;\n    void displaySalary() {\n        double totalSalary = basicSalary + programmingAllowance + projectAllowance;\n        System.out.println(\"Basic Salary          : \" + basicSalary);\n        System.out.println(\"Programming Allowance : \" + programmingAllowance);\n        System.out.println(\"Project Allowance     : \" + projectAllowance);\n        System.out.println(\"Total Salary          : \" + totalSalary);\n    }\n}\npublic class MultilevelSalaryDemo {\n    public static void main(String[] args) {\n        SeniorDeveloper s = new SeniorDeveloper();\n        s.displaySalary();\n    }\n}",
    "img": "assets/w8-6.webp"
   },
   {
    "num": "8",
    "id": "8.8",
    "kind": "program",
    "title": "Dynamic Method Dispatch for Bank Accounts",
    "cls": "DynamicMethodDispatchDemo",
    "topic": "Polymorphism",
    "aim": "",
    "code": "class BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Calculating bank account interest\");\n    }\n}\nclass SavingsAccount extends BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Savings Account Interest: 5%\");\n    }\n}\nclass CurrentAccount extends BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Current Account Interest: 3%\");\n    }\n}\npublic class DynamicMethodDispatchDemo{\n    public static void main(String[] args) {\n        BankAccount account;\n        account = new SavingsAccount();\n        account.calculateInterest();\n        account = new CurrentAccount();\n        account.calculateInterest();\n    }\n}",
    "img": "assets/w8-7.webp"
   },
   {
    "num": "9",
    "id": "8.9",
    "kind": "program",
    "title": "Constructor Execution in Multilevel Inheritance",
    "cls": "ConstructorOrder",
    "topic": "Inheritance",
    "aim": "",
    "code": "class Person {\n    Person() {\n        System.out.println(\"Person constructor executed\");\n    }\n}\nclass Student extends Person {\n    Student() {\n        System.out.println(\"Student constructor executed\");\n    }\n}\nclass GraduateStudent extends Student {\n    GraduateStudent() {\n        System.out.println(\"GraduateStudent constructor executed\");\n    }\n}\npublic class ConstructorOrder{\n    public static void main(String[] args) {\n        GraduateStudent g = new GraduateStudent();\n    }",
    "img": "assets/w8-8.webp"
   },
   {
    "num": "10",
    "id": "8.10",
    "kind": "program",
    "title": "Banking Application Using Inheritance",
    "cls": "BankingApplication",
    "topic": "Inheritance",
    "aim": "",
    "code": "class BankAccount {\n    int accountNumber;\n    double balance;\n    BankAccount(int accountNumber, double balance) {\n        this.accountNumber = accountNumber;\n        this.balance = balance;\n    }\n    void deposit(double amount) {\n        balance += amount;\n        System.out.println(\"Deposited: \" + amount);\n    }\n    void withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println(\"Withdrawn: \" + amount);\n        } else {\n            System.out.println(\"Insufficient balance\");\n        }\n    }\n    void calculateInterest() {\n        System.out.println(\"No interest for general account\");\n    }\n    void displayBalance() {\n        System.out.println(\"Account Number: \" + accountNumber);\n        System.out.println(\"Balance: \" + balance);\n    }\n}\nclass SavingsAccount extends BankAccount {\n    SavingsAccount(int accountNumber, double balance) {\n        super(accountNumber, balance);\n    }\n    void calculateInterest() {\n        double interest = balance * 0.05;\n        balance += interest;\n        System.out.println(\"Savings Interest: \" + interest);\n    }\n}\nclass CurrentAccount extends BankAccount {\n    CurrentAccount(int accountNumber, double balance) {\n        super(accountNumber, balance);\n    }\n    void calculateInterest() {\n        double interest = balance * 0.02;\n        balance += interest;\n        System.out.println(\"Current Account Interest: \" + interest);\n    }\n}\npublic class BankingApplication {\n    public static void main(String[] args) {\n        BankAccount savings = new SavingsAccount(101, 10000);\n        BankAccount current = new CurrentAccount(102, 15000);\n        System.out.println(\"Savings Account\");\n        savings.deposit(2000);\n        savings.withdraw(1000);\n        savings.calculateInterest();\n        savings.displayBalance();\n        System.out.println();\n        System.out.println(\"Current Account\");\n        current.deposit(3000);\n        current.withdraw(2000);\n        current.calculateInterest();\n        current.displayBalance();\n    }\n}",
    "img": "assets/w8-9.webp"
   }
  ]
 },
 {
  "week": 10,
  "title": "Exception Handling & Byte Streams",
  "topic": "Exception Handling",
  "desc": "try/catch, throw, throws, finally, user-defined exceptions and byte-stream file I/O.",
  "entries": [
   {
    "num": "1",
    "id": "10.1",
    "kind": "shot",
    "title": "Demonstrate exception handling using try and catch by handling division by zero",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to demonstrate exception handling using try and catch by handling division by zero.",
    "img": "assets/w10-p1.webp",
    "section": "Exception Handling"
   },
   {
    "num": "2",
    "id": "10.2",
    "kind": "shot",
    "title": "Demonstrate different types of exceptions such as arithmeticexception,arrayindexoutofboundsexception, and nullpointerexception",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to demonstrate different types of exceptions such as ArithmeticException,ArrayIndexOutOfBoundsException, and NullPointerException",
    "img": "assets/w10-p2.webp",
    "section": "Exception Handling"
   },
   {
    "num": "3",
    "id": "10.3",
    "kind": "shot",
    "title": "Demonstrate an uncaught exception and observe the default jvm exception message and stack trace",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to demonstrate an uncaught exception and observe the default JVM exception message and stack trace.",
    "img": "assets/w10-p3.webp",
    "section": "Exception Handling"
   },
   {
    "num": "4",
    "id": "10.4",
    "kind": "shot",
    "title": "Handle multiple exceptions using multiple catch clauses",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to handle multiple exceptions using multiple catch clauses.",
    "img": "assets/w10-p4.webp",
    "section": "Exception Handling"
   },
   {
    "num": "5",
    "id": "10.5",
    "kind": "shot",
    "title": "Demonstrate the use of the throw statement to explicitly generate an exception when a given condition is violated",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to demonstrate the use of the throw statement to explicitly generate an exception when a given condition is violated.",
    "img": "assets/w10-p5.webp",
    "section": "Exception Handling"
   },
   {
    "num": "6",
    "id": "10.6",
    "kind": "shot",
    "title": "Demonstrate the use of the throws keyword by propagating an exception to the calling method",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to demonstrate the use of the throws keyword by propagating an exception to the calling method.",
    "img": "assets/w10-p6.webp",
    "section": "Exception Handling"
   },
   {
    "num": "7",
    "id": "10.7",
    "kind": "shot",
    "title": "Demonstrate the use of the finally block for executing statements regardless of whether an exception occurs",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to demonstrate the use of the finally block for executing statements regardless of whether an exception occurs.",
    "img": "assets/w10-p7.webp",
    "section": "Exception Handling"
   },
   {
    "num": "8",
    "id": "10.8",
    "kind": "shot",
    "title": "Create a user-defined exception by extending the exception class",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to create a user-defined exception by extending the Exception class.",
    "img": "assets/w10-p8.webp",
    "section": "Exception Handling"
   },
   {
    "num": "9",
    "id": "10.9",
    "kind": "shot",
    "title": "Validate a student's marks and throw a custom exception when the marks are outside the valid range",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program to validate a student's marks and throw a custom exception when the marks are outside the valid range.",
    "img": "assets/w10-p9.webp",
    "section": "Exception Handling"
   },
   {
    "num": "10",
    "id": "10.10",
    "kind": "shot",
    "title": "Write a java program that combines try, multiple catch, throw, throws and finally in a single application",
    "cls": "",
    "topic": "Exception Handling",
    "aim": "Write a Java program that combines try, multiple catch, throw, throws and finally in a single application.",
    "img": "assets/w10-p10.webp",
    "section": "Exception Handling"
   },
   {
    "num": "11",
    "id": "10.11",
    "kind": "shot",
    "title": "Demonstrate the use of inputstream and outputstream to read bytes from an input source and write bytes to an output destination",
    "cls": "",
    "topic": "Byte Streams",
    "aim": "Write a Java program to demonstrate the use of InputStream and OutputStream to read bytes from an input source and write bytes to an output destination.",
    "img": "assets/w10-p11.webp",
    "section": "I/O Streams: Byte Streams"
   },
   {
    "num": "12",
    "id": "10.12",
    "kind": "shot",
    "title": "Read the contents of a file byte-by-byte using fileinputstream and display the contents on the console",
    "cls": "",
    "topic": "Byte Streams",
    "aim": "Write a Java program to read the contents of a file byte-by-byte using FileInputStream and display the contents on the console.",
    "img": "assets/w10-p12.webp",
    "section": "I/O Streams: Byte Streams"
   },
   {
    "num": "13",
    "id": "10.13",
    "kind": "shot",
    "title": "Write data into a file using fileoutputstream and verify the contents of the file",
    "cls": "",
    "topic": "Byte Streams",
    "aim": "Write a Java program to write data into a file using FileOutputStream and verify the contents of the file.",
    "img": "assets/w10-p13.webp",
    "section": "I/O Streams: Byte Streams"
   },
   {
    "num": "14",
    "id": "10.14",
    "kind": "shot",
    "title": "Copy the contents of one file to another file using fileinputstream and fileoutputstream",
    "cls": "",
    "topic": "Byte Streams",
    "aim": "Write a Java program to copy the contents of one file to another file using FileInputStream and FileOutputStream.",
    "img": "assets/w10-p14.webp",
    "section": "I/O Streams: Byte Streams"
   },
   {
    "num": "15",
    "id": "10.15",
    "kind": "shot",
    "title": "Copy an image from one file to another using byte streams and handle filenotfoundexception and ioexception using try-catch-finally",
    "cls": "",
    "topic": "Byte Streams",
    "aim": "Write a Java program to copy an image from one file to another using byte streams and handle FileNotFoundException and IOException using try-catch-finally.",
    "img": "assets/w10-p15.webp",
    "section": "I/O Streams: Byte Streams"
   }
  ]
 },
 {
  "week": 11,
  "title": "Character Streams & Multithreading",
  "topic": "Multithreading",
  "desc": "Reader/Writer, FileReader/FileWriter, and thread creation, isAlive() and join().",
  "entries": [
   {
    "num": "1",
    "id": "11.1",
    "kind": "shot",
    "title": "Read characters from the keyboard using reader and display them on the console using writer",
    "cls": "",
    "topic": "Character Streams",
    "aim": "Write a Java program to read characters from the keyboard using Reader and display them on the console using Writer.",
    "img": "assets/w11-p1.webp"
   },
   {
    "num": "2",
    "id": "11.2",
    "kind": "shot",
    "title": "Read the contents of a text file using filereader and display them on the console",
    "cls": "",
    "topic": "Character Streams",
    "aim": "Write a Java program to read the contents of a text file using FileReader and display them on the console.",
    "img": "assets/w11-p2.webp"
   },
   {
    "num": "3",
    "id": "11.3",
    "kind": "shot",
    "title": "Write text into a file using filewriter",
    "cls": "",
    "topic": "Character Streams",
    "aim": "Write a Java program to write text into a file using FileWriter.",
    "img": "assets/w11-p3.webp"
   },
   {
    "num": "4",
    "id": "11.4",
    "kind": "shot",
    "title": "Copy the contents of one text file into another using filereader and filewriter",
    "cls": "",
    "topic": "Character Streams",
    "aim": "Write a Java program to copy the contents of one text file into another using FileReader and FileWriter.",
    "img": "assets/w11-p4.webp"
   },
   {
    "num": "5",
    "id": "11.5",
    "kind": "shot",
    "title": "Count the number of characters, words, and lines in a text file using character streams",
    "cls": "",
    "topic": "Character Streams",
    "aim": "Write a Java program to count the number of characters, words, and lines in a text file using character streams.",
    "img": "assets/w11-p5.webp"
   },
   {
    "num": "6",
    "id": "11.6",
    "kind": "shot",
    "title": "Demonstrate the main thread and display its name, priority, and state",
    "cls": "",
    "topic": "Multithreading",
    "aim": "Write a Java program to demonstrate the Main Thread and display its name, priority, and state.",
    "img": "assets/w11-p6.webp"
   },
   {
    "num": "7",
    "id": "11.7",
    "kind": "shot",
    "title": "Create a thread by extending the thread class",
    "cls": "",
    "topic": "Multithreading",
    "aim": "Write a Java program to create a thread by extending the Thread class.",
    "img": "assets/w11-p7.webp"
   },
   {
    "num": "8",
    "id": "11.8",
    "kind": "shot",
    "title": "Create a thread by implementing the runnable interface",
    "cls": "",
    "topic": "Multithreading",
    "aim": "Write a Java program to create a thread by implementing the Runnable interface.",
    "img": "assets/w11-p8.webp"
   },
   {
    "num": "9",
    "id": "11.9",
    "kind": "shot",
    "title": "Create multiple threads and demonstrate their concurrent execution",
    "cls": "",
    "topic": "Multithreading",
    "aim": "Write a Java program to create multiple threads and demonstrate their concurrent execution.",
    "img": "assets/w11-p9.webp"
   },
   {
    "num": "10",
    "id": "11.10",
    "kind": "shot",
    "title": "Demonstrate the use of isalive() method to check whether a thread is running",
    "cls": "",
    "topic": "Multithreading",
    "aim": "Write a Java program to demonstrate the use of isAlive() method to check whether a thread is running.",
    "img": "assets/w11-p10.webp"
   },
   {
    "num": "11",
    "id": "11.11",
    "kind": "shot",
    "title": "Demonstrate the use of join() method to make one thread wait for another thread to complete",
    "cls": "",
    "topic": "Multithreading",
    "aim": "Write a Java program to demonstrate the use of join() method to make one thread wait for another thread to complete.",
    "img": "assets/w11-p11.webp"
   },
   {
    "num": "12",
    "id": "11.12",
    "kind": "shot",
    "title": "Create multiple threads and use isalive() and join() to control their execution order",
    "cls": "",
    "topic": "Multithreading",
    "aim": "Write a Java program to create multiple threads and use isAlive() and join() to control their execution order.",
    "img": "assets/w11-p12.webp"
   }
  ]
 }
];

/* ===== Application logic ===== */
(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ALL=LAB_DATA.flatMap(w=>w.entries.map(e=>Object.assign({},e,{week:w.week,weekTitle:w.title})));
const isProg=e=>e.kind==='program'||e.kind==='shot';
const PROGS=ALL.filter(isProg),DOCS=ALL.filter(e=>!isProg(e));
const WEEKS=LAB_DATA.map(w=>w.week);
const TOPICS=[...new Set(ALL.map(e=>e.topic))];
const PAGE=12;let state={week:'all',topic:'all',q:'',shown:PAGE};
const pad=n=>String(n).padStart(2,'0');

/* ---- Hero stats, profile ---- */
$('#heroStats').innerHTML=[[WEEKS.length,'Documented Weeks'],[PROGS.length,'Documented Programs'],[TOPICS.length,'Topics Covered'],[Math.round(WEEKS.length/(Math.max(...WEEKS))*100)+'%','Portfolio Progress']]
 .map(s=>`<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('');
$('#profileCards').innerHTML=[['Student Name','J. Vijay Raj'],['Roll Number','25EU02080'],['Branch','AI & ML'],['Faculty','Mr. Dr. Ramesh'],['Academic Year','2025–29'],['Subject','Java Lab'],['Technologies','Java · HTML · CSS · JavaScript']]
 .map(p=>`<dl class="card pc"><dt>${p[0]}</dt><dd>${esc(p[1])}</dd></dl>`).join('');

/* ---- Week cards ---- */
$('#weekCards').innerHTML=LAB_DATA.map(w=>{const p=w.entries.filter(isProg).length,d=w.entries.length-p;
 return `<article class="card wk reveal"><span class="n">Week ${w.week}</span><h3>${esc(w.title)}</h3><p>${esc(w.desc)}</p><div class="meta"><span class="pill">${p?p+' program'+(p>1?'s':''):d+' document'+(d>1?'s':'')}</span><button class="btn" type="button" data-week="${w.week}">View ${p?'Programs':'Documents'}</button></div></article>`}).join('');

/* ---- Filters ---- */
$('#chips').innerHTML=['all',...WEEKS].map(w=>`<button class="chip" type="button" data-w="${w}" aria-pressed="${w==='all'}">${w==='all'?'All':'Week '+w}</button>`).join('');
$('#topic').innerHTML='<option value="all">All topics</option>'+TOPICS.map(t=>`<option>${esc(t)}</option>`).join('');

/* ---- Syntax highlighting ---- */
const KW=new Set('abstract boolean break byte case catch char class continue default do double else extends final finally float for if implements import instanceof int interface long new package private protected public return short static super switch this throw throws try void while'.split(' ')),LIT=new Set(['true','false','null']);
function hl(code){const re=/(\/\/[^\n]*)|("(?:\\.|[^"\\\n])*")|('(?:\\.|[^'\\\n])*')|\b(\d+(?:\.\d+)?[fFlL]?)\b|\b([A-Za-z_]\w*)\b/g;let o='',l=0,m;
 const sp=(c,t)=>`<span class="${c}">${esc(t)}</span>`;
 while((m=re.exec(code))){o+=esc(code.slice(l,m.index));l=re.lastIndex;const t=m[0];
  o+=m[1]?sp('c',t):(m[2]||m[3])?sp('s',t):m[4]?sp('n',t):m[5]?(KW.has(t)||LIT.has(t)?sp('k',t):/^[A-Z]/.test(t)?sp('t',t):esc(t)):esc(t)}
 return o+esc(code.slice(l))}

/* ---- Program rendering ---- */
function label(e){return e.kind==='table'||e.kind==='steps'?'Doc':'W'+e.week+' · '+e.num}
function body(e){let h='';
 if(e.kind==='table'){h+=`<h4>Comparison</h4><div class="tw" tabindex="0" role="region" aria-label="Language comparison table"><table><thead><tr>${e.table[0].map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${e.table.slice(1).map(r=>`<tr>${r.map((c,i)=>i===1?`<th scope="row">${esc(c)}</th>`:`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;return h}
 if(e.kind==='steps'){h+=`<h4>Aim</h4><p>${esc(e.aim)}</p><h4>Procedure</h4><div class="steps">${e.steps.map(s=>`<figure class="st" style="margin:0"><b>Step ${s.n}</b><p>${esc(s.text)}</p>${s.img?`<img class="shot" loading="lazy" src="${s.img}" alt="${esc(e.title)} – screenshot for step ${s.n}">`:''}</figure>`).join('')}</div>`;return h}
 if(e.aim)h+=`<h4>${e.kind==='shot'?'Problem Statement':'Aim'}</h4><p>${esc(e.aim)}</p>`;
 if(e.req&&e.req.length)h+=`<h4>Requirements</h4><ul>${e.req.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>`;
 if(e.code)h+=`<h4>Source Code</h4><div class="cb"><div class="cbh"><span>${esc(e.cls||'Java')}.java</span><button class="cp" type="button" data-copy="${e.id}" aria-label="Copy code for ${esc(e.title)}">Copy Code</button></div><pre tabindex="0"><code>${hl(e.code)}</code></pre></div>`;
 else if(e.kind==='shot')h+=`<p class="na">Source code is shown inside the screenshot below (not available as text in the document).</p>`;
 if(e.img)h+=`<h4>Output</h4><img class="shot" loading="lazy" src="${e.img}" alt="${e.kind==='shot'?'Code and output screenshot':'Output screenshot'} for Week ${e.week}, Program ${e.num}: ${esc(e.title)}">`;
 else h+=`<h4>Output</h4><p class="na">No output screenshot in the document.</p>`;
 h+=`<h4>Result</h4><p class="na">Result statement not included in the document.</p>`;return h}
function row(e){const sub=[e.cls&&'Class: '+e.cls,'Week '+e.week+' · '+e.weekTitle].filter(Boolean).join(' · ');
 return `<article class="pr" data-id="${e.id}"><button class="ph" type="button" aria-expanded="false"><span class="pno">${esc(label(e))}</span><span class="pt"><strong>${esc(e.title)}</strong><small>${esc(sub)}</small></span><span class="tag">${esc(e.topic)}</span><span class="chev" aria-hidden="true">▾</span></button><div class="pb" hidden></div></article>`}
const hay=e=>(`week ${e.week} w${e.week} program ${e.num||''} ${e.num||''} ${e.title} ${e.cls} ${e.topic} ${e.weekTitle} ${e.aim||''} ${e.code||''} ${(e.req||[]).join(' ')}`).toLowerCase();
const HAY=new Map(ALL.map(e=>[e.id,hay(e)]));
function render(){const q=state.q.trim().toLowerCase(),wkq=/\bweek\b/.test(q),terms=q.split(/\s+/).filter(Boolean);
 const res=ALL.filter(e=>(state.week==='all'||e.week==state.week)&&(state.topic==='all'||e.topic===state.topic)&&terms.every(t=>/^\d+(\.\d+)?$/.test(t)?(t==String(e.week)||(!wkq&&t==e.num)):HAY.get(e.id).includes(t)));
 $('#count').textContent=res.length?`Showing ${Math.min(state.shown,res.length)} of ${res.length} entr${res.length>1?'ies':'y'}`:'';
 $('#list').innerHTML=res.length?res.slice(0,state.shown).map(row).join(''):'<p class="empty">No entries match your search or filters.</p>';
 $('#more').hidden=res.length<=state.shown;$('#more').dataset.left=res.length-state.shown}
const reset=()=>{state.shown=PAGE;render()};
$('#q').addEventListener('input',e=>{state.q=e.target.value;reset()});
$('#topic').addEventListener('change',e=>{state.topic=e.target.value;reset()});
$('#chips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;state.week=b.dataset.w;$$('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));reset()});
$('#more').addEventListener('click',()=>{state.shown+=PAGE;render()});
$('#list').addEventListener('click',e=>{
 const cp=e.target.closest('.cp');if(cp){const it=ALL.find(x=>x.id===cp.dataset.copy);copy(it.code);return}
 const h=e.target.closest('.ph');if(!h)return;const pb=h.nextElementSibling,open=h.getAttribute('aria-expanded')==='true';
 if(!open&&!pb.dataset.r){pb.innerHTML=body(ALL.find(x=>x.id===h.parentNode.dataset.id));pb.dataset.r=1}
 h.setAttribute('aria-expanded',!open);pb.hidden=open});
$('#weekCards').addEventListener('click',e=>{const b=e.target.closest('[data-week]');if(!b)return;state.week=b.dataset.week;state.q='';state.topic='all';$('#q').value='';$('#topic').value='all';
 $$('.chip').forEach(c=>c.setAttribute('aria-pressed',c.dataset.w===state.week));reset();$('#programs').scrollIntoView({behavior:'smooth'})});
/* ---- Copy ---- */
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),1800)}
function copy(txt){const ok=()=>toast('Code copied!');
 if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(txt).then(ok,fb);else fb();
 function fb(){const a=document.createElement('textarea');a.value=txt;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy');ok()}catch(_){toast('Copy failed')}a.remove()}}

/* ---- Progress ---- */
(function(){const span=Math.max(...WEEKS),missing=[];for(let i=1;i<=span;i++)if(!WEEKS.includes(i))missing.push(i);
 const code=PROGS.filter(p=>p.code).length,shots=PROGS.filter(p=>p.img).length;
 const card=(t,big,sub,pc)=>`<div class="card"><h3>${t}</h3><div class="big">${big}</div><div class="bar" role="progressbar" aria-label="${t}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pc}"><i data-w="${pc}"></i></div><small>${sub}</small></div>`;
 const wp=Math.round(WEEKS.length/span*100);
 $('#prog').innerHTML=card('Documented weeks',`${WEEKS.length} / ${span}`,`Weeks ${WEEKS.join(', ')} of the weeks 1–${span} range`,wp)
 +card('Programs documented',PROGS.length,`Plus ${DOCS.length} installation / comparison documents`,100)
 +card('Source code as text',`${code} / ${PROGS.length}`,'Remaining programs keep their code inside screenshots',Math.round(code/PROGS.length*100))
 +card('Output screenshots',`${shots} / ${PROGS.length}`,'Programs paired with an output screenshot',Math.round(shots/PROGS.length*100))
 +card('Topics covered',TOPICS.length,'Distinct topics across all documented weeks',100)
 +card('Overall portfolio progress',wp+'%',`Share of weeks 1–${span} present in the documents`,wp)
 +(missing.length?`<div class="card miss"><h3>Not in the uploaded documents</h3><p class="na" style="margin:8px 0 0">Week${missing.length>1?'s':''} ${missing.join(', ')} ${missing.length>1?'are':'is'} not documented here, so no content is shown for ${missing.length>1?'them':'it'}.</p></div>`:'');
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){$$('.bar i',x.target).forEach(i=>i.style.width=i.dataset.w+'%');io.unobserve(x.target)}}),{threshold:.2});io.observe($('#prog'))})();

/* ---- Learning journey ---- */
$('#tl').innerHTML=LAB_DATA.map(w=>`<li class="reveal"><span class="w">Week ${w.week}</span><h3>${esc(w.title)}</h3><p>${esc(w.desc)}</p><div class="tp">${[...new Set(w.entries.map(e=>e.topic))].map(t=>`<span>${esc(t)}</span>`).join('')}</div></li>`).join('');

/* ---- Nav, theme, scrolling ---- */
const menu=$('#menu'),burger=$('#burger'),ind=$('#ind');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')});
menu.addEventListener('click',e=>{if(e.target.closest('a')){menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){menu.classList.remove('open');burger.setAttribute('aria-expanded',false);burger.focus()}});
function setActive(id){id=id==='journey'?'progress':id;$$('.menu a').forEach(a=>{const on=a.dataset.s===id;a.classList.toggle('on',on);if(on){a.setAttribute('aria-current','true');ind.style.left=a.offsetLeft+14+'px';ind.style.width=a.offsetWidth-28+'px'}else a.removeAttribute('aria-current')})}
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)setActive(x.target.id)}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s=>so.observe(s));addEventListener('resize',()=>setActive(($('.menu a.on')||{dataset:{s:'home'}}).dataset.s));
const T=$('#theme');function paint(){const d=document.documentElement.dataset.theme==='dark';$('#themeI').textContent=d?'☀':'☾';T.setAttribute('aria-label',d?'Switch to light theme':'Switch to dark theme')}
T.addEventListener('click',()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('jlap-theme',n)}catch(_){}paint()});paint();
const top=$('#top');addEventListener('scroll',()=>{top.hidden=scrollY<500},{passive:true});top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const ro=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ro.unobserve(x.target)}}),{threshold:.1});$$('.reveal').forEach(r=>ro.observe(r));
render();setActive('home');
})();
