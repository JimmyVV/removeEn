let expect = require('chai').expect,
    removeEn = require('../src');

describe('remove md code',function () {
    it('the origin should equal the back one ',function () {
        let str = `首先，需要让顶点着色器（vertex shader）具有处理3D的能力。
旧版本顶点着色器：
\`\`\`html
        <script id="2d-vertex-shader" type="x-shader/x-vertex">
            attribute vec2 a_position;

        uniform mat3 u_matrix;

        void main() {
            // Multiply the position by the matrix.
            gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
        }
        </script>
        \`\`\`

新版本顶点着色器：
\`\`\`html
        <script id="3d-vertex-shader" type="x-shader/x-vertex">
            attribute vec4 a_position;

        uniform mat4 u_matrix;

        void main() {
            // Multiply the position by the matrix.
            gl_Position = u_matrix * a_position;
        }
        </script>
        \`\`\`
`;
        let hide = removeEn.hideCode(str),
            hide_str = hide.str,
            codes = hide.code_container;
        expect(removeEn.backCode(hide_str,codes)).to.equal(str);
    })
})
