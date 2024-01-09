const findVowel ='sunanda'

    
    var b = 0;

    for (var i = 0; i < findVowel.length; i++) {
        if (findVowel[i] == 'a' || findVowel[i] == 'e' || findVowel[i] == 'i' || findVowel[i] == 'o' || findVowel[i] == 'u') {
            b = b + 1;
        }
    }

   console.log("the number of vowels in the name are : " + b)
