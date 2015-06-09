walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bHuman Error\b/g, "A Complex Interaction of Events and Factors");
	v = v.replace(/\bhuman error\b/g, "a complex interaction of events and factors");
	v = v.replace(/\bHuman error\b/g, "A complex interaction of events and factors");
	v = v.replace(/\bhuman Error\b/g, "A complex interaction of events and factors");
	
	textNode.nodeValue = v;
}


