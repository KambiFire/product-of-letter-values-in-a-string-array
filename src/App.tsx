import "./styles.css";

export default function App() {

  function findLetter (s_array:string[]) : string {
    console.log(s_array.length)
    if (s_array.length < 1 || s_array[0].length < 1) return `Empty string!`;
        
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = ['a', 'e', 'i', 'o' ,'u'];

    let alphabetValues: Record<string, number> = {};
    let cnt1 = 0, cnt2 = 0, cnt3 = 0;

    for (let i=0; i<alphabet.length; i++)
      alphabetValues[alphabet[i]] = i + 1;

    for (let i=0; i<s_array[0].length; i++)   
      if (vowels.indexOf(s_array[0][i]) !== -1) cnt1 += 1;
      else if (alphabetValues[s_array[0][i]]%2 === 0) cnt2 += 1;
      else cnt3 += 1;
    
    const solution = `Vowels = ${cnt1},\
                      \nEven Consonants = ${cnt2},\
                      \nOdd Consonants = ${cnt3},
                      \nProduct = ${cnt1*cnt2*cnt3}`;
    
    return solution;
  }

  const tests = [
    [],
    [""],
    ["abc",],
    ["bcdfghjjhgfdcb",],
    ["aabbddeeffhh",],
    ["eioubqle",],
  ];

  console.log(findLetter(["bcdfghjjhgfdcb"]));

  return (
    <div className="App">
      <h1>Product of letter values in a string array</h1>
      <div style={{ textAlign: "left", marginLeft: 100 }}>
        <h2>Tests:</h2>
        <hr/>
        <table style={{ width: "90%"}}>
          <colgroup>
            <col style={{ width: "auto" }} />
            <col style={{ width: "60%", backgroundColor: "lightgrey" }} />
          </colgroup>
          <tbody>
            {tests.map((test, index) => (
              <tr key={index}>
                <td><h3>[ {test} ]</h3></td>
                <td>
                  {findLetter(test).split(",").map((string, index2) => (
                    <div key={index2} style={{ fontWeight: 600, padding: 3 }}>{string}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      
    </div>
  );
}

