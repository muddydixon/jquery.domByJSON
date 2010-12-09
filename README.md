# jquery.domByJSON

jquery.domByJSON is jquery plugin for creating DOM by writing JSON.

like this

## Usage

     $('body').domByJSON([
         {
             div:{
		             id: 'firstDiv',
                 childNodes: [
                     {
                         div: {
                             id: 'first-firstDiv'
                         }
                     }, {
                         h1: 'this is a useful plugin'
                     }
                 ]
             }
         },
         {
             div:{
                 id: 'secondDiv',
                 childNodes: [
                     {
                         h2: {
                             childNodes: [
                                 "usage",
                                 {
                                     p: "$('body').domByJSON()"
                                 }
                             ]
                         }
                     }
                 ]
             }
         }
     ]);
										 