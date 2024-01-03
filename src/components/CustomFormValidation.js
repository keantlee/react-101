export default function CustomFormValidation(data){
    // console.log(data);
    const errors = {};
    let errorCount = 0;

    if(data.title === ""){
        // console.log('Title is required');
        errors.title = "*Title is required!";
        errorCount++;
    }

    if(data.body === ""){
        // console.log('Content is required');
        errors.body = "*Content is required!";
        errorCount++;
    }

    if(data.author === ""){
        // console.log('Author is required');
        errors.author = "*Author is required!"
        errorCount++
    }

    return {errors, errorCount};
}