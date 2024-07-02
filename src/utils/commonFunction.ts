import { useTranslation } from "next-i18next";

export function transTitle(_title:string,_langFileName:string){

        const {t} = useTranslation(_langFileName)
        return t(_title);

}