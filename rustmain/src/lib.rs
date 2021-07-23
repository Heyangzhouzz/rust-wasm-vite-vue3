mod hello;
pub mod universe;
mod webgl;

use std::fmt;

use wasm_bindgen::prelude::*;

// Import the `window.alert` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
    bare_bones();
    hello::append_html()?;
    webgl::start()?;
    Ok(())
}

fn bare_bones() {
    unsafe {
        log("test123");
    }
}
