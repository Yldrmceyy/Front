 //PRATİK 1 VARIABLES/OPERATORS
      // 1. let anahtar kelimesi ile bir değişken tanımlayın ve ona favori renginizi atayın. Bu değişkeni konsola yazdırın.
      let favoriteColor = "blue";
      console.log("Favorite Color (let):", favoriteColor);

      // 2. const anahtar kelimesi ile bir değişken tanımlayın ve ona doğum yılınızı atayın. Bu değişkeni konsola yazdırın.
      const birthYear = 1995;
      console.log("Birth Year (const):", birthYear);

      // 3. var anahtar kelimesi ile bir değişken tanımlayın ve ona favori meyvenizi atayın. Bu değişkeni konsola yazdırın.
      var favoriteFruit = "strawberry";
      console.log("Favorite Fruit (var):", favoriteFruit);

      // 4. let ile tanımladığınız değişkenin değerini güncelleyip tekrar konsola yazdırın.
      favoriteColor = "green";
      console.log("Updated Favorite Color (let):", favoriteColor);

      // 5. const ile tanımladığınız değişkenin değerini güncelleyip ne olduğunu gözlemleyin.
      try {
        birthYear = 2000; // Bu satır hata verecektir çünkü const ile tanımlanan değişkenlerin değeri değiştirilemez.
      } catch (error) {
        console.log("Birth Year (const) update attempt error:", error.message);
      }

      //PRATİK 2 - DATA TYPES/ FUNCTIONS
      // Number veri türünden bir örnek
      let numberExample = 42;
      console.log("Number:", numberExample);

      // String veri türünden bir örnek
      let stringExample = "Hello, World!";
      console.log("String:", stringExample);

      // Boolean veri türünden bir örnek
      let booleanExample = true;
      console.log("Boolean:", booleanExample);

      // Null veri türünden bir örnek
      let nullExample = null;
      console.log("Null:", nullExample);

      // Undefined veri türünden bir örnek
      let undefinedExample;
      console.log("Undefined:", undefinedExample);

      // Symbol veri türünden bir örnek
      let symbolExample = Symbol("example");
      console.log("Symbol:", symbolExample);

      // BigInt veri türünden bir örnek
      let bigIntExample = BigInt(12345678901234567890);
      console.log("BigInt:", bigIntExample);

      // Object oluşturun
      let objectExample = {
        name: "Ceylan",
        age: 27,
        isStudent: true,
      };
      console.log("Object:", objectExample);
      console.log("Object name:", objectExample.name);
      console.log("Object age:", objectExample.age);
      console.log("Object isStudent:", objectExample.isStudent);

      // Array oluşturun
      let arrayExample = [
        1,
        "apple",
        true,
        null,
        undefined,
        Symbol("example"),
        BigInt(123),
      ];
      console.log("Array:", arrayExample);
      console.log("Array element 0:", arrayExample[0]);
      console.log("Array element 1:", arrayExample[1]);
      console.log("Array element 2:", arrayExample[2]);
      console.log("Array element 3:", arrayExample[3]);
      console.log("Array element 4:", arrayExample[4]);
      console.log("Array element 5:", arrayExample[5]);
      console.log("Array element 6:", arrayExample[6]);

      //PRATİK3-FONKSİYON
      // 1. İki sayının toplamını döndüren bir fonksiyon tanımlayın ve bu fonksiyonu çağırarak sonucu konsola yazdırın.

      function sum(a, b) {
        return a + b;
      }
      console.log("Sum:", sum(5, 2));

      //2. Bir sayının karesini hesaplayan bir fonksiyon ifadesi tanımlayın ve bu fonksiyonu çağırarak sonucu konsola yazdırın.
      let square = function (x) {
        return x * x;
      };
      console.log("Square:", square(4));

      // 3. İki sayıyı bölen ve sonucu döndüren bir arrow fonksiyonu tanımlayın ve bu fonksiyonu çağırarak sonucu konsola yazdırın.
      let division = (a, b) => {
        return a / b;
      };
      console.log("Division:", division(18, 3));

      //PRATİK 4 - OBJECTS
      const car = {
        brand: "Mercedes",
        model: "C-180",
        year: 2022,
        color: "white",

        getDetails: function () {
          return `The brand of this car is ${this.brand}, the model is ${this.model},the year is ${this.year}, and the color is ${this.color}`;
        },
      };
      console.log(car.getDetails());

      //PRATİK 4 - ARRAYS
      // 1. Bir numbers dizisi oluşturun ve bu diziye 5 sayı ekleyin.
      // 2. numbers dizisine bir sayı ekleyin ve dizinin son elemanını silin.
      // 3. numbers dizisindeki elemanları for döngüsü ve forEach metodu kullanarak konsola yazdırın.
      const numbers = [1, 2, 3, 4, 5];
      numbers.push(6);
      console.log(numbers);

      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
      }

      numbers.forEach(function (num) {
        console.log(num);
      });

      //PRATİK5 - Conditional Statements / Loops (Döngüler / Koşul İfadeleri)
      //Bir age değişkeni tanımlayın ve bu değişkenin değerine göre "Child", "Teenager", "Adult" mesajlarını konsola yazdırın. (if-else)
      const age = 25;
      if (age >= 0 && age <= 12) {
        console.log("Child çocuk👧🏽");
      } else if (age >= 13 && age <= 19) {
        console.log("Teenager👩🏽");
      } else if (age >= 20) {
        console.log("Adult 👩🏽‍🦱");
      } else {
        console.log("Invalid age");
      }

      //Bir day değişkeni tanımlayın ve bu değişkenin değerine göre haftanın gününü konsola yazdırın. (switch)
      const day = 3;

      switch (day) {
        case 0:
          console.log("Sunday");
          break;
        case 1:
          console.log("Monday");
          break;
        case 2:
          console.log("Tuesday");
          break;
        case 3:
          console.log("Wednesday");
          break;
        case 4:
          console.log("Thursday");
          break;
        case 5:
          console.log("Friday");
          break;
        case 6:
          console.log("Saturday");
          break;
        default:
          console.log("Invalid day");
      }

      //for döngüsü kullanarak 1'den 10'a kadar olan sayıları konsola yazdırın.

      for (let i = 1; i <= 10; i++) {
        console.log(i);
      }
      //while döngüsü kullanarak 10'dan 1'e kadar olan sayıları konsola yazdırın.
      let j = 10;
      while (j >= 1) {
        console.log(j);
        j--;
      }
      //do...while döngüsü kullanarak bir dizideki tüm elemanları konsola yazdırın.
      const arr = [1, 2, 3, 4, 5];
      let k = 0;

      do {
        console.log(arr[k]);
        k++;
      } while (k < arr.length);

      