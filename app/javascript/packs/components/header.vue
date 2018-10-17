<template>
  <div>
    <ul id="dromdown" class="dropdown-content">
      <li><a href="#">Top</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Content</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo left">Todo Application</a>
        <ul class="right hide-on-med-dwon">
          <li><a href="#">Top</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Content</a></li>
        </ul>
        <ul class="right hide-on-large-only">
          <li>
            <a class="dromdown-button" href="#!" data-activates="dropdown">
              Menu<i class="material-icon right">arrow-drop-down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
