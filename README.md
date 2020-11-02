**NgRx** - библиотека Angular, предназначенна для управления состоянием приложения (реализует принципы *Redux*).       
Реализация NgRx работает с помощью RxJs - она использует потоки observables и различные RxJs-операторы.    
    
**Redux** - библиотека, предназначенна для управления состоянием приложения (реализует принципы *Flux*).       

**Flux** - архитектурый подход для построения пользовательского интерфейса веб-приложений.    

**Основные принципы Redux**:   
- Единственный источник данных - это состояние **state**
- Место, где хранится состояние - это хранилище **store**
- Изменять состояние могут только чистые функции **reduсer**, которые принимают два аргумента - предыдущее состояние и уникальное действие **action**
- **reduсer** срабатывает только при возникновении какого-либо действия **action**
- **action** - отправляется компонентами или сервисами; описывает, что происходит - получение, добавление, удаление, обновление состояния
- Когда **reduсer** изменяет что-либо в состоянии, он возвращает новый объект состояния (состояние является immutable)

# Links
[Ru Video Tutorial](https://www.youtube.com/watch?v=cklhiPDxkck&list=PL6tnFekR2qfPBdxroaLRqvIv_EJoxauUO)  
[Ru Video Tutorial](https://www.youtube.com/watch?v=d2pkNhIS10o)              
[Ru Text Tutorial](https://medium.com/ngx/angular-ngrx-%D1%8F%D1%81%D0%BD%D0%BE%D0%B5-%D0%B8-%D1%87%D1%91%D1%82%D0%BA%D0%BE%D0%B5-%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-bdf1c97f44b2)             
[Eng Text Video Tutorial](https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management)    

# Строительные единицы жизненного цикла ngrx - действия (actions), редукторы (reducer), селекторы (select), хранилище (store) и эффекты (effects)
Рассмотрим жизненный цикл NGRX:   
![](https://miro.medium.com/max/631/1*s3oCQSfwACyyioKaST_xTQ.png)

1. Взаимодействие с пользователем может привести к тому, что компонент отправит действие (**action**).        
> В объекте хранилища (*store*) есть функция для отправки (dispatch) действий.            
> Класс действий имеет два свойства:           
> - тип *type* - строка только для чтения, описывающая, что означает действие            
> - полезная нагрузка *payload* (не все действия требуют полезной нагрузки)             

2. Действие может вызывать или не вызывать эффект (**effects**): 

- Если действие не вызывает эффект (trigger effect), то редуктор (**reducers**) отфильтрует действие (обычно с помощью оператора switch), и вернёт хранилищу новое состояние (*new state*), которое будет результатом слияния старого состояния со значением, которое изменилось после вызова действия.         
> **Редукторы (*reducers*)** — это чистые функции, принимающие два аргумента: предыдущее состояние (state) и действие (action).   

- Если действие вызвало эффект (**effects**), то это говорит о необходимости обработки эффектов перед вызовом редуктора.           
> Эффекты (*effects*) прослушивают отправленные действия, и, также как и редукторы, проверяют, имеются ли у них обработчик для них.   
> Эффекты - это обычная функция изменения состояния данных.     
> После того, как эффект отработал, он запускает новое действие и работа переходит к редуктору.    

3. Редуктор возвращает **хранилищу (store)** новое состояние.   
> **Состояние (state)** это большой объект, поэтому в ngrx есть ф-ции, которые называются **селекторы (selectors)**, которые предназначены для получения фрагментов нашего хранилища. Селекторы позволяют обрабатывать данные фрагмента состояния вне компонента.       
> Функция «select» принимает в качестве аргумента чистую функцию.    

4. **Хранилище (store)** — это объект, который объединяет действия, редукторы, селекторы. Например, когда через его функции отправляется действие, то хранилище находит и выполняет соответствующий редуктор. Хранилище также хранит состояние приложения.

# Настройка NGRX

## 1. NgRx/store — реализует Redux паттерн. Установка NgRx/store (хранилища) [ https://ngrx.io/guide/store/install ]          
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

## 2. NgRx/store-devtools — позволяет отслеживать изменения в приложении через redux-devtools. Установка NgRx/store-devtools [ https://ngrx.io/guide/store-devtools/install ]  
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

## 3. NgRx/effects — позволяет добавлять в хранилище данные, приходящие в приложение, такие как http запросы. Установка NgRx/effects [ https://ngrx.io/guide/effects/install ]
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

# Задачи

### 1. Счетчик [ app/components/a]

### 2. To-Do List [ app/components/b]
https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management

### 3.
https://www.youtube.com/watch?v=N_UQx8dPPkc&list=PLW2eQOsUPlWJRfWGOi9gZdc3rE4Fke0Wv