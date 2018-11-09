import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <a className="navbar-brand d-flex align-items-center py-2" href="./">
                        <img alt='excerpts' className='mr-2' width='20' height='20' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmF ja2dyb3VuZDpuZXcgMCAwIDUyIDUyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTIgNT IiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z yIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBl PSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+PGc+PGc+PHBhdGggY2x hc3M9InN0MCIgZD0iTTMzLjcxMzcxNDYsMTEuMjc1NDcwN2MzLjYxMTMyMDUsMi4yNTk4MDA5LD UuMDg4NzkwOSw2LjAwNzYxNDEsNS4yMjUyMzUsMTAuMTI5OTY2NyAgICBjMC4xMzM1ODMxLDQuM DM2MDA2OS0wLjgzMTE2MTUsNi4xOTIxNTk3LTMuNDMyNTMzMyw5LjUyNDg5MjhjLTIuNDMyNTYs My4xMTY0NjA4LTUuMDE4MTQ4NCw2LjM2OTE2NTQtNS41MDI0NDE0LDEwLjQyNTE2OSAgICBjLTA uMzg3NzY5NywzLjI0NzYwODIsMC4zMjYwOTE4LDYuMDQ0NzY5My0zLjIwMTI1MDEsNy4xMDA4Nz JjLTIuNDIyMzksMC43MjUyNzY5LTIuMDg1NTk4LTIuMzc2MzMxMy01LjExODA3MDYtMi4xNTkyM DY0ICAgIGMwLjM3NSwwLjM3NSwwLjc1LDAuNzUsMS4xMjUsMS4xMjVjMC4xNDU0MDg2LTMuNDEz MTU0NiwxLjE4OTczMzUtNy42MjI1NDcxLTAuNjI1OTQ2LTEwLjY3NDk2MTEgICAgYy0yLjQxMDE 0NDgtNC4wNTE3OTIxLTcuMDUxNDE3NC02LjQ3MDI1NDktOC43MTY2NzI5LTExLjAwODUwODdjLT IuMjIzOTUxMy02LjA2MDg0NDQsMC4wODg2NjAyLTEwLjk0NjQwMDYsNC44MzM2MTYzLTE0Ljc3O DMzNjUgICAgYzMuNTczMDc2Mi0yLjg4NTU0NzYsMTUuNjgwNzY3MS00LjIxOTIwMiwxNy40NjQx MjY2LDEuNDQyODEyYzAuNDMzNDgzMSwxLjM3NjI3OTgsMi42MDYzNzY2LDAuNzg4NTAxNywyLjE 2OTYyODEtMC41OTgxMzg4ICAgIGMtMi4wOTAzMTMtNi42MzY1NTc2LTcuMDY0NzkyNi01LjI4ND A5MjktMTMuMTQ1NjY4LTUuMTY0OTc4NWMtNS41ODM3MzY0LDAuMTA5Mzc2LTkuNDY3NzgwMSwyL jgzMzMxMDYtMTIuODE3NjA2OSw3LjQ2MTEyNDkgICAgYy0yLjQ1NDg0MDcsMy4zOTEzODMyLTIu MTAyNTcxNSw4Ljk0MDU4MzItMC41OTkwNzkxLDEyLjY5OTM4MThjMS4xNjYyNjkzLDIuOTE1NzI 3NiwzLjUzNzg2MDksNS4wMjg3MTMyLDUuNjE2NjEyNCw3LjI4NTQ4ODEgICAgYzEuNTgyNTY3Mi wxLjcxODA5NzcsMy4zODYyOTE1LDMuNDg0Mjc5NiwzLjg4Nzk0MzMsNS44OTYzMTY1YzAuNDUxN DM4OSwyLjE3MDYxNjEtMC4yMjIxNTQ2LDUuMjE0NTk5Ni0wLjMxNjk1MzcsNy40Mzk4MDAzICAg IGMtMC4wMjQ1NzQzLDAuNTc2ODE2NiwwLjUzNjEyOSwxLjE2NzE2MzgsMS4xMjUsMS4xMjVjMS4 wNDc5NTA3LTAuMDc1MDMxMywxLjQyNzQ3MzEsMS43MjQ2NjY2LDIuMjI0OTI3OSwyLjExMDI0OD YgICAgYzEuMjc4MDQzNywwLjYxNzk0NjYsMy41NzM1ODU1LDAuMDAyNjM5OCw0Ljg0MjkxMjctM C4wODM3NzA4YzAuNTU0NDY4Mi0wLjAzNzc0NjQsMC44Nzk2MTItMC4zMzUwMTgyLDEuMDg0ODE0 MS0wLjgyNTkzMTUgICAgYzAuNDMzMjQwOS0xLjAzNjQ0OTQsMS42MzYzODMxLTEuMTU2MDEzNSw yLjExNDczNjYtMi4wOTY3MTRjMC44MjA0OTU2LTEuNjEzNTI1NCwwLjEyMjc2ODQtNC4xMTM3Nj E5LDAuMzU3ODE0OC01LjgzMDg1MjUgICAgYzAuNzc3Mjk4LTUuNjc4NDEzNCw1LjM1ODYxMjEtO C4zMjEyMzU3LDcuNzQxOTMxOS0xMy4wNTMxNzEyYzMuMjEyODYzOS02LjM3ODk0MDYsMC43Njc4 NDUyLTE1LjY5ODM2NDMtNS4yMDI0NjEyLTE5LjQzNDMxMDkgICAgQzMzLjYxODMyMDUsOC41NjI zNTEyLDMyLjQ4NzY1OTUsMTAuNTA4MjYxNywzMy43MTM3MTQ2LDExLjI3NTQ3MDdMMzMuNzEzNz E0NiwxMS4yNzU0NzA3eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjEuODc1NDc2O Cw0My45NjU4NjYxYzIuOTk5ODk1MSwwLjA2MDczLDUuOTk5NzkwMiwwLjEyMTQ2MzgsOC45OTk2 ODUzLDAuMTgyMTkzOCAgICBjMS40NDg0MzQ4LDAuMDI5MzIzNiwxLjQ0ODMwNTEtMi4yMjA2NzY 0LDAtMi4yNWMtMi45OTk4OTUxLTAuMDYwNzMtNS45OTk3OTAyLTAuMTIxNDYzOC04Ljk5OTY4NT MtMC4xODIxOTM4ICAgIEMyMC40MjcwNDAxLDQxLjY4NjU0MjUsMjAuNDI3MTcxNyw0My45MzY1N DI1LDIxLjg3NTQ3NjgsNDMuOTY1ODY2MUwyMS44NzU0NzY4LDQzLjk2NTg2NjF6Ii8+PC9nPjxn PjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMC44MTgzNDAzLDI0LjkyMDE0MzFjMS4yMzA0MzgyLDE uMDY2MTgzMSwyLjQ1NDg1ODgsMi4xMzk4OTI2LDMuNjkxNTg1NSwzLjE5ODc4NTggICAgYzAuNj g0NTcwMywwLjU4NjEzNCwxLjM4ODQ4NjksMS4zMDAzNjkzLDIuMzcyMTM1MiwxLjIwMTA4OGMxL jk4ODQ0MzQtMC4yMDA2OTUsMy45NTAyMDEtMy4wMjI1NDg3LDUuMDM3MTQxOC00LjQ2ODk4ODQg ICAgYzAuODcwMDk2Mi0xLjE1Nzg3MTItMS4wODI0NjgtMi4yODA1MDgtMS45NDI4MDgyLTEuMTM 1NjE4MmMtMC41ODgwMzU2LDAuNzgyNTI2LTEuMjI5MTgzMiwxLjUxMjU5OTktMS45NDUxMjM3LD IuMTgwNDM5ICAgIGMtMC42OTY5NzM4LDAuNjUwMTQ2NS0wLjk3NjM0MzIsMS4zMjcwMDkyLTEuO TMwMzU1MSwwLjYzMjA4OTZjLTEuMzAxMDk0MS0wLjk0Nzc0MjUtMi40NzU4ODE2LTIuMTQ1MzY4 Ni0zLjY5MTU4NTUtMy4xOTg3ODU4ICAgIEMyMS4zMTk3MzI3LDIyLjM4NTAxMTcsMTkuNzIxNjI wNiwyMy45Njk4Mjk2LDIwLjgxODM0MDMsMjQuOTIwMTQzMUwyMC44MTgzNDAzLDI0LjkyMDE0Mz F6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNS4yNTU4NTE3LDI4LjY5NzczNjdjL TAuMDA4MjM1OSw0LjQ3Njg2NTgtMC40OTM0NTIxLDkuMjgzODUzNSwwLjM0NzU1NTIsMTMuNzAy MDYyNiAgICBjMC4yNzA0NTI1LDEuNDIwODEwNywyLjQzOTQxNjksMC44MTkxODMzLDIuMTY5NjI 4MS0wLjU5ODE0MDdjLTAuNzk5NjM0OS00LjIwMDg2MjktMC4yNzUwMjQ0LTguODQxNjM2Ny0wLj I2NzE4MzMtMTMuMTAzOTIxOSAgICBDMjcuNTA4NTE2MywyNy4yNDk4NTg5LDI1LjI1ODUyMDEsM jcuMjQ3NjkyMSwyNS4yNTU4NTE3LDI4LjY5NzczNjdMMjUuMjU1ODUxNywyOC42OTc3MzY3eiIv PjwvZz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNS4wNDE2NjY1LDI1LjczOTM5NTFjMS4zNjE xMTEyLDAsMi43MjIyMjIzLDAsNC4wODMzMzM1LDBjMS40NDc3NjczLDAsMS40NTAxNjU3LTIuMj UsMC0yLjI1ICAgIGMtMS4zNjExMTEyLDAtMi43MjIyMjIzLDAtNC4wODMzMzM1LDBDMy41OTM4O TksMjMuNDg5Mzk1MSwzLjU5MTUwMSwyNS43MzkzOTUxLDUuMDQxNjY2NSwyNS43MzkzOTUxTDUu MDQxNjY2NSwyNS43MzkzOTUxeiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNOS42NzU zOTEyLDkuMTQ3ODM1N2MwLjU5ODA4MTYsMC42MzU0NjA5LDEuMDYwNDkxNiwxLjM0OTI2ODksMS 40MjkzNzA5LDIuMTM5ODkxNiAgICBjMC4yNTY4ODg0LDAuNTUwNTkxNSwxLjA0OTM4MzIsMC42O TAxMDA3LDEuNTM5MjEzMiwwLjQwMzU5NWMwLjU2NDQ0MzYtMC4zMzAxNDY4LDAuNjYxNDQ3NS0w Ljk4NjU1OCwwLjQwMzU5NTktMS41MzkyMTMyICAgIGMtMC40NDcxMzQtMC45NTgzNDY0LTEuMDU 2Nzk2MS0xLjgyNTU5NjgtMS43ODExODk5LTIuNTk1MjYzNUMxMC4yNzE4ODc4LDYuNTAwMTk5My w4LjY4MzAzMzksOC4wOTM0NTkxLDkuNjc1MzkxMiw5LjE0NzgzNTcgICAgTDkuNjc1MzkxMiw5L jE0NzgzNTd6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNS4yODA3MjE3LDIuMTk1 Mzc4MWMwLjA2NzgyNTMsMC45NDQ4MDU2LDAuMDgyNDY5OSwxLjg4ODg1MjgsMC4wNDM5OTExLDI uODM1MjkyNiAgICBjLTAuMDU4ODcwMywxLjQ0NzkxMDMsMi4xOTEyNDAzLDEuNDQ1MjMxLDIuMj UsMGMwLjAzODQ4MDgtMC45NDY0NTU1LDAuMDIzODMyMy0xLjg5MDUwMjUtMC4wNDM5OTExLTIuO DM1MjkyNiAgICBjLTAuMDQzNTEwNC0wLjYwNjA5My0wLjQ4NTkxMjMtMS4xMjUtMS4xMjUtMS4x MjVDMjUuODMwNTc3OSwxLjA3MDM3ODEsMjUuMjM2OTgyMywxLjU4NjA4OTMsMjUuMjgwNzIxNyw yLjE5NTM3ODEgICAgTDI1LjI4MDcyMTcsMi4xOTUzNzgxeiIvPjwvZz48Zz48cGF0aCBjbGFzcz 0ic3QwIiBkPSJNNDIuMTYxODk5Niw3LjY1MTI2MjNjLTAuNjQ5MTU4NSwwLjYzMjU0MDctMS4yN Tc5NTc1LDEuMjk5ODI3Ni0xLjgyODQ2ODMsMi4wMDQxMjQ2ICAgIGMtMC4zODIxMTQ0LDAuNDcx NzI0NS0wLjQ2MTIwMDcsMS4xMjk3OTAzLDAsMS41OTA5OTAxYzAuMzk1MDg0NCwwLjM5NTA4MzQ sMS4yMDY1OTY0LDAuNDc0NTM3OCwxLjU5MDk5MiwwICAgIGMwLjU3MDUwNy0wLjcwNDI5NzEsMS 4xNzkzMDk4LTEuMzcxNTgzOSwxLjgyODQ2ODMtMi4wMDQxMjQ2QzQ0Ljc5MTc3MDksOC4yMjk5N jcxLDQzLjIwMDA4MDksNi42Mzk2NTk5LDQyLjE2MTg5OTYsNy42NTEyNjIzICAgIEw0Mi4xNjE4 OTk2LDcuNjUxMjYyM3oiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjg3NSwyNi4 wNzI3MjcyYzEuMDI3Nzc4NiwwLDIuMDU1NTU3MywwLDMuMDgzMzMyMSwwYzEuNDQ3NzY5MiwwLD EuNDUwMTY4Ni0yLjI1LDAtMi4yNSAgICBjLTEuMDI3Nzc0OCwwLTIuMDU1NTUzNCwwLTMuMDgzM zMyMSwwQzQyLjQyNzIzMDgsMjMuODIyNzI3Miw0Mi40MjQ4MzUyLDI2LjA3MjcyNzIsNDMuODc1 LDI2LjA3MjcyNzJMNDMuODc1LDI2LjA3MjcyNzJ6Ii8+PC9nPjwvZz48L3N2Zz4=' />
                        <strong>excerpts</strong>
                    </a>
                    <a className="nav-link py-2 d-none d-md-inline-block" href="./">:)</a>
                </div>
            </nav>
        </header>
    );
  }
};


