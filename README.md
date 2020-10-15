**Redux** - библиотека, предназначенная для управления состоянием приложения.   
**NgRx** - библиотека, реализует принципы работы Redux для Angular приложений.   

Принципы Redux:   
- Единственный источник данных — состояние (**state**)
- Состояние является неизменяемым - только для чтения
- Изменять состояние могут только чистые функции (**reduсers**), которые принимают два аргумента: предыдущее состояние (state) и действие (action)
- **reduсer** срабатывает только при возникновении какого-либо действия (**action**), которое описывает, что происходит (получение, добавление, удаление, обновление состояния)

# Links
[Rus Video Tutorial](https://www.youtube.com/watch?v=cklhiPDxkck&list=PL6tnFekR2qfPBdxroaLRqvIv_EJoxauUO)             
[Rus Text Tutorial](https://medium.com/ngx/angular-ngrx-%D1%8F%D1%81%D0%BD%D0%BE%D0%B5-%D0%B8-%D1%87%D1%91%D1%82%D0%BA%D0%BE%D0%B5-%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-bdf1c97f44b2)             
[Eng Text Video Tutorial](https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management)    

# Действия (actions), редукторы (reducer), селекторы (select), хранилище (store) и побочные эффекты (effects)
Рассмотрим жизненный цикл NGRX.   
1. Взаимодействие с пользователем может привести к тому, что компонент отправит действие (*dispatch action*):
|| В объекте хранилища (*store*) есть функция для отправки/запуска (dispatch/trigger) действий.        
|| Класс действий (*action*) имеет два свойства:
||	- тип *type* - строка только для чтения, описывающая, что означает действие
||	- полезная нагрузка *payload* (не все действия требуют полезной нагрузки)
2.1. Если действие не вызывает эффект (trigger effect), то редуктор отфильтрует действие (обычно с помощью оператора switch), и вернёт новое состояние, которое будет результатом слияния старого состояния со значением, которое изменилось после вызова действия:   
|| Редукторы (*reducers*) — это чистые функции, принимающие два аргумента: предыдущее состояние (state) и действие (action).    
2.2. Если действие вызвало эффект, то это говорит о необходимости обработки побочных эффектов перед вызовом редуктора:   
|| Эффекты (*effects*) прослушивают отправленные действия, и, также как и редукторы, проверяют, имеются ли у них обработчик для них.   
|| Эффекты - это обычная функция изменения состояния данных.     
|| После того, как эффект отработал, он запускает новое действие и мы возвращаемся к пункту 2.1.    

...

# Настройка NGRX

## 1. NgRx/store — реализует Redux паттерн.
## Установка NgRx/store (хранилища) [ https://ngrx.io/guide/store/install ]          
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

## 2. NgRx/store-devtools — позволяет отслеживать изменения в приложении через redux-devtools.
## Установка NgRx/store-devtools [ https://ngrx.io/guide/store-devtools/install ]  
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

## 3. NgRx/effects — позволяет добавлять в хранилище данные, приходящие в приложение, такие как http запросы.
## Установка NgRx/effects [ https://ngrx.io/guide/effects/install ]
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
```

## 4. Установка router-store [ https://ngrx.io/guide/router-store/install ]
С помощью команды `ng add @ngrx/router-store@latest`, выполняем установку *router-store* в ангуляр-проект.
В результате произойдут следующие изменения:   
- *package.json*:
```json
  "dependencies": {
    "@ngrx/router-store": "^10.0.1",
  },
```
- *src\app\app.module.ts*:
```js
import { StoreRouterConnectingModule } from '@ngrx/router-store';
@NgModule({
  imports: [
    StoreRouterConnectingModule.forRoot()
  ],
})
```

## 5. Установка расширения Redux DevTools для в Google Chrome браузера
*Redux DevTools* - расширение для Google Chrome браузера, которое добавляет вкладку Redux в Google Chrome, которая необходима для отладки.    

# Задача #1
Cделать счетчик, который имеет такое состояние:
```js
{
  count: 0, 
  updatedAt: timestamp
}
```
Управление с помощью кнопок - increase, decrease, clear.    
Каждое нажатие обновляет свойство updatedAt.

==============
Создаем файл `ngrx-app\src\app\app.effects.ts`

```js
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
}
```
==============