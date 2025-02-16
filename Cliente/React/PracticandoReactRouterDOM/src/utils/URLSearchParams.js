export function getParams(search) {
   const query = new URLSearchParams();
   const param = query.get(search) || "";

   return param;
}
