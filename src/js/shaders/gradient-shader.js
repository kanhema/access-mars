// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


/**
 * gradient-shader
 *
 * Draws a one-color alpha gradient along the UV.y axis.
 * Used for the base of the horizon-markers.
 */

export const uniforms = {
	color: { type: 'c', value: new THREE.Color( 0xFFFFFF ) },
	alpha: { type: '1f', value: 0.5 }
};

export const vertexShader = [
	
	'varying float vUVy;',

	'void main() {',
		'vUVy = uv.y;',
		'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
	'}'

].join( '\n' );

export const fragmentShader = [
	
	'uniform float alpha;',
	'uniform vec3 color;',

	'varying float vUVy;',

	'void main() {',
		'gl_FragColor = vec4( color, mix( 0.0, alpha, 1.0 - vUVy ) );',
	'}'

].join( '\n' );