<script>
import { page } from '$app/stores'
let pathname = $page.url.pathname ;
</script>


<h1>
   {$page.status} :  Oops! Something went wrong. 
</h1>
<p>
    What did you tried to do?
</p>

<p>
    Why did you tried to go to {pathname}?
</p>


<img src="IKW.jpg" alt="IKW" width="200" height="200">