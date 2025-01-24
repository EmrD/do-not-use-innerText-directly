# Do Not Use .innerText Directly

This is a test repository to show the security issues of the usage for .innerText property to make some requests to backend or somewhere. You can test on your local environment by cloning this repository.

## Testing The Security Issue

To see, follow; 

- Clone this repository to your local env. 
- Run with ``npm run dev``
- Open DevTools
- Click button to see the default content
- Edit the div text with elements section
- Click again to see edited text

<strong>The security issue is, we may sending some requests with .innerText. And anyone can change the text for one-time.</strong>