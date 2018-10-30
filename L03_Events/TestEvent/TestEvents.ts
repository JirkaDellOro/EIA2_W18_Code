namespace TestEvents {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("click", handleEvent);
    document.addEventListener("mouseover", handleEvent);
    document.addEventListener("keydown", handleEvent);

    function init(_event: Event): void {
        console.log(_event);
    }

    function handleEvent(_event: Event): void {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.target);
        
    }
}