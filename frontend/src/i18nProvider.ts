// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Tasks":{"name":"tasks","fields":{"Title":"Title","Description":"Description","DueDate":"DueDate","Status":"Status","id":"id"}},"Users":{"name":"users","fields":{"Name":"Name","Email":"Email","TasksAssigned":"TasksAssigned","Role":"Role","id":"id"}},"Projects":{"name":"projects","fields":{"Title":"Title","Description":"Description","Deadline":"Deadline","AssignedTasks":"AssignedTasks","id":"id"}},"Comments":{"name":"comments","fields":{"Content":"Content","Author":"Author","Task":"Task","Timestamp":"Timestamp","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    