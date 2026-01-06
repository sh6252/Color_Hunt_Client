import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function compareControlValues(controls:string[],errorName:string):ValidatorFn{
    return(form:AbstractControl):ValidationErrors|null=>{
        console.log(form);
        console.log(controls);
        const values = controls.map(ctl=>form.value[ctl])
        const isValid = values.every(v1=>v1===values[0])
        if(!isValid){
            return {compare:errorName}
        }
        return null  
    }
}