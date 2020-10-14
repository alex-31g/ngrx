**Redux** — js-библиотека, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.               

Библиотека **NgRx** реализует принцип работы Redux для Angular приложений.         
Главная цель NgRx - централизовать и сделать максимально понятным управление всеми состояниями приложения.             
Цель достигается благодаря заложенным в библиотеке нескольким фундаментальным принципам:
- Наличие единственного источника данных о состоянии - хранилища (store);
- Доступность состояния только для чтения;
- Изменение состояние осуществляется только через действия (actions), которые обрабатываются редюсерами (reducer), представляющими собой чистые функции.

https://www.youtube.com/watch?v=cklhiPDxkck&list=PL6tnFekR2qfPBdxroaLRqvIv_EJoxauUO                    
https://www.youtube.com/watch?v=n8e9dBDzTzw&t=2s            
https://www.youtube.com/watch?v=kEbdQaLdDoo            
https://www.youtube.com/watch?v=5MwaZ2G5WnQ           

# Настройка NGRX

## 1. Установка ngrx-store (хранилища) [ https://ngrx.io/guide/store/install ]          
С помощью команды `ng add @ngrx/store@latest`, выполняем установку *ngrx-store* в ангуляр-проект.   
В результате произойдут следующие изменения:      
- *package.json*:
```json
  "dependencies": {
    "@ngrx/store": "^10.0.1",
  },
```
- *src\app\app.module.ts*:
```js
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
})
```
- будет создана новая директория *reducers* и файл *src\app\reducers\index.ts*

## 2. Установка store-devtools [ https://ngrx.io/guide/store-devtools/install ]  
С помощью команды `ng add @ngrx/store-devtools@latest`, выполняем установку *store-devtools* в ангуляр-проект.
В результате произойдут следующие изменения:      
- *package.json*:
```json
  "dependencies": {
    "@ngrx/store-devtools": "^10.0.1",
  },
```
- *src\app\app.module.ts*:
```js
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
})
```

## 3. Установка ngrx-effects [ https://ngrx.io/guide/effects/install ]
С помощью команды `ng add @ngrx/effects@latest`, выполняем установку *ngrx-effects* в ангуляр-проект.
В результате произойдут следующие изменения:   
- *package.json*:
```json
  "dependencies": {
    "@ngrx/effects": "^10.0.1",
  },
```
- *src\app\app.module.ts*:
```js
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  imports: [
    EffectsModule.forRoot([])
  ],
})