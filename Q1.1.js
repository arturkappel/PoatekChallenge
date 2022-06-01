const students = [['Bruno', 170, 14], ['Leonardo', 174, 21], ['Juan', 156, 12], ['Juliana', 166, 13], ['Wagner',
184, 17], ['Micaela', 172, 18], ['Bento', 150, 14], ['Lucia', 162, 13], ['Pedro', 169, 14], ['Carla',
158, 16]]



function heightAverage(array){
    const numberOfStudents = array.length;
    let sum = 0, average = 0;

    array.map(arr => {
        let height = arr[1]

        sum += height;

        return(sum)
    })

    average = sum/numberOfStudents
    return average;
}

// Count how many students passes in the conditions
function answer(array){
    const average = heightAverage(array)
    let count = 0;

    array.map(arr => {
        let height = arr[1]
        let age = arr[2]

        const isOlderThan13 = (age > 13)
        const isSmallerThanAverage = (height < average)

        if(isOlderThan13 && isSmallerThanAverage){
            count++
        }


    })

    console.log(` The number of people older than thirteen and smaller than average is: ${count}`)
    return count
}


answer(students)