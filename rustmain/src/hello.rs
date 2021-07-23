use wasm_bindgen::prelude::JsValue;
pub fn append_html() -> Result<(), JsValue> {
    let window = web_sys::window().expect(r#"no global "window" exists"#);
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");
    let val = document.create_element("p")?;
    val.set_text_content(Some("Hello from Rust!"));

    body.append_child(&val)?;

    Ok(())
}
