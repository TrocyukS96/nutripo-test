export type Product = {
    id: number
    dietanamnesis_group_id:number
    dietanamnesis_group:{
        id:number
        name:string
        icon_url:null | string
    }
    name:string
    icon_url:null | string
    photo_url:null | string
    is_mini:boolean
    dish_exceptions:[]
    description:null | string
    unit:string
    standart_serving:number
    standart_serving_description:string
    order:number
    use_in_survey:boolean
    cases:{}

}

