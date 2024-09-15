# **Introduction**

React is a strong JavaScript tool for making powerful web apps. But, like all tech stuff, it has some problems that your developers might run into. To make development smooth, it’s important for developers to know the common issues when using React.

In this article, we’ll talk about four interesting challenges in React coding. We’ll show examples of common mistakes in React development that can happen when using this framework and how to make things better.

To maintain a relaxed and easygoing tone in this blog post, we won’t delve deeply into the explanations behind these common pitfalls. Instead, we’ll provide a brief and convenient reference.

## **Evaluating with zero**

Take a look at the following setup:

![https://blog.bravebits.co/wp-content/uploads/2023/09/1-1024x667.png](https://blog.bravebits.co/wp-content/uploads/2023/09/1-1024x667.png)

Our objective is to display a list conditionally. We want to render a List element only if we have at least one item in the array. However, an unexpected ‘0‘ appears in the user interface!

This occurs because when we check `items.length`, it evaluates to 0. Since 0 is considered a falsy value in JavaScript, the `&&` operator short-circuits, resulting in the entire expression resolving to 0, and the number 0 is a valid value in JSX.

How to fix: We should use a “pure” boolean value or a ternary expression

![https://blog.bravebits.co/wp-content/uploads/2023/09/2-1024x389.png](https://blog.bravebits.co/wp-content/uploads/2023/09/2-1024x389.png)

## **Not generating keys**

The most common way you might encounter the warning like “Warning: Each child in a list should have a unique “key” prop.” is when you’re looping through data using the `map` function. Here’s an example that demonstrates this problem:

![https://blog.bravebits.co/wp-content/uploads/2023/09/3.png](https://blog.bravebits.co/wp-content/uploads/2023/09/3.png)

We need a “key” value when generating items through `map` in React to help React efficiently update and manage components in lists. It ensures each item is uniquely identified, optimizing performance and preventing rendering issues.

Many online resources will suggest using the array index to solve this problem but it’s not a good advice. This approach will work sometimes, but it can cause some pretty big problems in other circumstances.

How to fix: generate a unique ID whenever a new item is added to the list (ex: using uuid…). Importantly, we aim to create the ID when updating the state. We should avoid using `uuid()` directly within `key={}` because generating it within the JSX like this would lead to the key changing with every render. When the key changes, React will rebuild these elements, potentially causing significant performance issues.

## **Accessing state after changing it**

I have a simple counter application: increase the count when clicking on the button.

![https://blog.bravebits.co/wp-content/uploads/2023/09/4-1024x562.png](https://blog.bravebits.co/wp-content/uploads/2023/09/4-1024x562.png)

It’s a concern when the displayed number differs from the logged number. For example, when the UI says 1, it logs “0” to the console. The problem is state-setter function in React like setCount are asynchronous. When we call setCount, we aren’t re-assigning a variable. We’re scheduling an update.

How to fix: We need to capture it in a variable to access

![https://blog.bravebits.co/wp-content/uploads/2023/09/5.png](https://blog.bravebits.co/wp-content/uploads/2023/09/5.png)

## **Async effect function**

Here’s an example where we want to retrieve data from an API when a component mounts. We’ll use the ‘useEffect’ hook and the ‘await’ keyword for this task.

Below, we’re setting some initial state as [] via a useState hook, which of course we’ll want to populate via a GET request when the component mounts.

![https://blog.bravebits.co/wp-content/uploads/2023/09/6-1024x761.png](https://blog.bravebits.co/wp-content/uploads/2023/09/6-1024x761.png)

Once the component is mounted, we utilize a `useEffect` hook to make an API call to retrieve items data. This call returns a Promise, which we handle with the `.then()` method. Inside the `.then()` block, we extract the data and use the `setItems()` setter function to update our `items` value. With this in mind, we’ll want to introduce async as a function, and combine it with an await statement:

![https://blog.bravebits.co/wp-content/uploads/2023/09/7-1024x402.png](https://blog.bravebits.co/wp-content/uploads/2023/09/7-1024x402.png)

This approach does work, but it’s best to avoid it. The reason is the useEffect hook isn’t expecting us to return a promise! It expects us to return either nothing or a cleanup function. When you use an asynchronous function in this context, it can lead to a bug because the cleanup function may never be called, causing potential issues.

How to fix: using an async function inside the useEffect hook.

![https://blog.bravebits.co/wp-content/uploads/2023/09/8-1024x499.png](https://blog.bravebits.co/wp-content/uploads/2023/09/8-1024x499.png)

# **Conclusion**

To sum it up, React is a powerful tool for creating robust, high-performance web applications. However, like any technology, it’s crucial to grasp its nuances and adhere to best practices to make the most of it. In this article, we have explored some common mistakes that I believe not everyone is aware of, and you can proactively learn more about various other issues online. Hopefully, the knowledge in this article can help make your code more efficient, reliable, and maintainable.
