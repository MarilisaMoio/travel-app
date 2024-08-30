# The *Mission Impossible Travel Manager* app 

The app for those who have to manage little times.

### Tech Stack
- **React**: because this is what I'm currently studying;
- **TypeScript**: because a typed language is always a safest choice;
- **Tailwind**: because I'm currently studying it AND because I think it's way more versatile compared to Bootstrap;
- **json-server**: having the necessity to do a quicker version of this exercise, I preferred to use it instead of making an entire back-end from scratch. 

### How to make it work
After installing everything, it's necessary to start the server too. In a different terminal tab, run ```npm run server``` and it will automatically run it on port 9000. If you need to change the port please go to package.json, search for
```
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "server": "json-server --watch data/db.json --port 9000"
  },
```
and change it on the last line. 

### Flaws
- First of all, the ispiration for the name: I'm currently doing a *long* technical step and my brain and time is all on that. I have 2 days - update from the second day: no, just a single day - free, but joke on you I have to organize for a real travel. I'm trying to do something and use this occasion to learn/consolidate new things, so even if I don't manage to make it work I'll be happy anyway. 
- Based on the previous point, I didn't research enough JSON Server to know that it doesn't support nested object, so I don't have a http://localhost:9000/travels/1/legs to access the legs, just http://localhost:9000/travels/1 to access the single travel. There's a workaround to make it work, but anyway I would not be able to do the interface.  
- Talking about Tailwind, I'm not too sure if I'm doing everything right. For colors in common, for example, maybe I should create a custom color in the tailwind.config.js so that I can "centralize" the place in which I change it? It feels "wrong" that I'm writing bg/text-stone-50 everywhere.
- React, my lovely react. For now I've seen two main approaches to it: deconstruct props and declare ``` const AppName: React.FC<Props> = ({prop1, prop2, ...}) ``` and the second one, the one I've choose to use this time, that doesn't use a declaration for the component itself and that keeps props as ``` const appName = (props: Props) ```. Still trying to figure out what's the better one. Except for this, probably I could use some more component composition. 
