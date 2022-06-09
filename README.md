## g0blin-utils
a JavaScript tool lib.



#### example

```javascript
import { deepCopy } from 'g0blin-utils';

const obj = { str: 'string', obj: {}, arr: [] };
const obj2 = deepCopy(obj);  // { str: 'string', obj: {}, arr: [] }
```
or
```javascript
import utils from 'g0blin-utils';

const obj = { str: 'string', obj: {}, arr: [] };
const obj2 = utils.deepCopy(obj);  // { str: 'string', obj: {}, arr: [] }
```



#### author

g0blin



#### version

1.0.3



#### license

ISC