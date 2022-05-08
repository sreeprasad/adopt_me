# adopt_me

### Commands I ran on terminal

1. -y option adds standard options without needing to fill in details
   npm init -y

2. Install prettier and immediately apply on file
   npx prettier src/App.js --write

3. -D indicates dev dependency and not prod dep
   npm install -D prettier

4. Automatically fix eslint error
   npx run lint -- fix

5. npm init @eslint/config

6. npm install -D parcel@2.2.1

7. npm install react@17.0.2 react-dom@17.0.2.

8. to run server
   npm run dev

9. npm install -D eslint-plugin-import@2.25.4 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.0

10. To fix vulnerabilities
    npm audit --fix

11. use defaultValue in input forms to make values mutable
    <input id="location" defaultValue={location} placeholder="Location" />

12. useState depends on order of call. Have to call in same order.
    Do not have conditional hook.
    if (something) {
    const [chair, setChair] = useState("")
    }
    const [animal, setAnimal] = useState(")
    Depending on if something is True or not, animal may get chair value.
    Dont put hook inside if conditions or rules.

13. setLocation is variable. Can use updateLocation as well.

14. controlled form. Used when input should be controlled. eg. valid password chars is present.
<form>
               <label htmlFor="location">
                   Location  
                   <input id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
               </label>
               <button>Submit</button>
           </form>

15. uncontrolled form
<form onSubmit={}>
                <label htmlFor="location">
                    Location  
                    <input id="location" placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>

16. npm install -D eslint-plugin-react-hooks@4.3.0
