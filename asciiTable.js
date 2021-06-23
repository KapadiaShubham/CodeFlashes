const ascii = document.getElementById('ascii-table');
const dec = document.getElementById('dec');
const hex = document.getElementById('hex');
const oct = document.getElementById('oct');
const decH = document.getElementsByClassName('dec-header')
const decE = document.getElementsByClassName('dec-element')


ascii.innerHTML = `<table class="wikitable" style="text-align: left;">
<tr>
<th class="dec-header"> <code>dec</code> </th>
<th class="oct-header"> <code>oct</code> </th>
<th class="hex-header"> <code>hex</code>
</th>
<th class="ch-header" style="text-align: left;"> <code>ch</code>
</th>
<td rowspan="33">
</td>
<th class="dec-header"> <code>dec</code> </th>
<th class="oct-header"> <code>oct</code> </th>
<th class="hex-header"> <code>hex</code>
</th>
<th class="ch-header" style="text-align: left;"> <code>ch</code>
</th>
<td rowspan="33">
</td>
<th class="dec-header"> <code>dec</code> </th>
<th class="oct-header"> <code>oct</code> </th>
<th class="hex-header"> <code>hex</code>
</th>
<th class="ch-header" style="text-align: left;"> <code>ch</code>
</th>
<td rowspan="33">
</td>
<th class="dec-header"> <code>dec</code> </th>
<th class="oct-header"> <code>oct</code> </th>
<th class="hex-header"> <code>hex</code>
</th>
<th class="ch-header" style="text-align: left;"> <code>ch</code>
</th></tr>
<tr>
<td class="dec-element"> <code> 0</code></td>
<td class="oct-element"> <code>0</code></td>
<td class="hex-element"> <code>00</code></td>
<td class="ch-element"> <code><b>NUL</b></code> (null) </td>
<td class="dec-element"> <code>32</code></td>
<td class="oct-element"><code>40</code></td>
<td class="hex-element"> <code>20</code></td>
<td class="ch-element"> <code>">(space) </td>
<td class="dec-element"> <code>64</code></td>
<td class="oct-element"><code>100</code></td>
<td class="hex-element"> <code>40</code></td>
<td class="ch-element"> <code><b>@</b></code> </td>
<td class="dec-element"> <code> 96</code></td>
<td class="oct-element"><code>140</code></td>
<td class="hex-element"> <code>60</code></td>
<td class="ch-element"> <code><b>&#x60;</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 1</code></td>
<td class="oct-element"> <code>1</code></td>
<td class="hex-element"> <code>01</code></td>
<td class="ch-element"> <code><b>SOH</b></code> (start of header) </td>
<td class="dec-element"> <code>33</code></td>
<td class="oct-element"><code>41</code></td>
<td class="hex-element"> <code>21</code></td>
<td class="ch-element"> <code><b>!</b></code> </td>
<td class="dec-element"> <code>65</code></td>
<td class="oct-element"><code>101</code></td>
<td class="hex-element"> <code>41</code></td>
<td class="ch-element"> <code><b>A</b></code> </td>
<td class="dec-element"> <code> 97</code></td>
<td class="oct-element"><code>141</code></td>
<td class="hex-element"> <code>61</code></td>
<td class="ch-element"> <code><b>a</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 2</code></td>
<td class="oct-element"> <code>2</code></td>
<td class="hex-element"> <code>02</code></td>
<td class="ch-element"> <code><b>STX</b></code> (start of text) </td>
<td class="dec-element"> <code>34</code></td>
<td class="oct-element"><code>42</code></td>
<td class="hex-element"> <code>22</code></td>
<td class="ch-element"> <code><b>"</b></code> </td>
<td class="dec-element"> <code>66</code></td>
<td class="oct-element"><code>102</code></td>
<td class="hex-element"> <code>42</code></td>
<td class="ch-element"> <code><b>B</b></code> </td>
<td class="dec-element"> <code> 98</code></td>
<td class="oct-element"><code>142</code></td>
<td class="hex-element"> <code>62</code></td>
<td class="ch-element"> <code><b>b</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 3</code></td>
<td class="oct-element"> <code>3</code></td>
<td class="hex-element"> <code>03</code></td>
<td class="ch-element"> <code><b>ETX</b></code> (end of text) </td>
<td class="dec-element"> <code>35</code></td>
<td class="oct-element"><code>43</code></td>
<td class="hex-element"> <code>23</code></td>
<td class="ch-element"> <code><b>#</b></code> </td>
<td class="dec-element"> <code>67</code></td>
<td class="oct-element"><code>103</code></td>
<td class="hex-element"> <code>43</code></td>
<td class="ch-element"> <code><b>C</b></code> </td>
<td class="dec-element"> <code> 99</code></td>
<td class="oct-element"><code>143</code></td>
<td class="hex-element"> <code>63</code></td>
<td class="ch-element"> <code><b>c</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 4</code></td>
<td class="oct-element"> <code>4</code></td>
<td class="hex-element"> <code>04</code></td>
<td class="ch-element"> <code><b>EOT</b></code> (end of transmission) </td>
<td class="dec-element"> <code>36</code></td>
<td class="oct-element"><code>44</code></td>
<td class="hex-element"> <code>24</code></td>
<td class="ch-element"> <code><b>$</b></code> </td>
<td class="dec-element"> <code>68</code></td>
<td class="oct-element"><code>104</code></td>
<td class="hex-element"> <code>44</code></td>
<td class="ch-element"> <code><b>D</b></code> </td>
<td class="dec-element"> <code>100</code></td>
<td class="oct-element"><code>144</code></td>
<td class="hex-element"> <code>64</code></td>
<td class="ch-element"> <code><b>d</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 5</code></td>
<td class="oct-element"> <code>5</code></td>
<td class="hex-element"> <code>05</code></td>
<td class="ch-element"> <code><b>ENQ</b></code> (enquiry) </td>
<td class="dec-element"> <code>37</code></td>
<td class="oct-element"><code>45</code></td>
<td class="hex-element"> <code>25</code></td>
<td class="ch-element"> <code><b>%</b></code> </td>
<td class="dec-element"> <code>69</code></td>
<td class="oct-element"><code>105</code></td>
<td class="hex-element"> <code>45</code></td>
<td class="ch-element"> <code><b>E</b></code> </td>
<td class="dec-element"> <code>101</code></td>
<td class="oct-element"><code>145</code></td>
<td class="hex-element"> <code>65</code></td>
<td class="ch-element"> <code><b>e</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 6</code></td>
<td class="oct-element"> <code>6</code></td>
<td class="hex-element"> <code>06</code></td>
<td class="ch-element"> <code><b>ACK</b></code> (acknowledge) </td>
<td class="dec-element"> <code>38</code></td>
<td class="oct-element"><code>46</code></td>
<td class="hex-element"> <code>26</code></td>
<td class="ch-element"> <code><b>&amp;</b></code> </td>
<td class="dec-element"> <code>70</code></td>
<td class="oct-element"><code>106</code></td>
<td class="hex-element"> <code>46</code></td>
<td class="ch-element"> <code><b>F</b></code> </td>
<td class="dec-element"> <code>102</code></td>
<td class="oct-element"><code>146</code></td>
<td class="hex-element"> <code>66</code></td>
<td class="ch-element"> <code><b>f</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 7</code></td>
<td class="oct-element"> <code>7</code></td>
<td class="hex-element"> <code>07</code></td>
<td class="ch-element"> <code><b>BEL</b></code> (bell) </td>
<td class="dec-element"> <code>39</code></td>
<td class="oct-element"><code>47</code></td>
<td class="hex-element"> <code>27</code></td>
<td class="ch-element"> <code><b>'</b></code> </td>
<td class="dec-element"> <code>71</code></td>
<td class="oct-element"><code>107</code></td>
<td class="hex-element"> <code>47</code></td>
<td class="ch-element"> <code><b>G</b></code> </td>
<td class="dec-element"> <code>103</code></td>
<td class="oct-element"><code>147</code></td>
<td class="hex-element"> <code>67</code></td>
<td class="ch-element"> <code><b>g</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 8</code></td>
<td class="oct-element"><code>10</code></td>
<td class="hex-element"> <code>08</code></td>
<td class="ch-element"> <code><b>BS</b></code> (backspace) </td>
<td class="dec-element"> <code>40</code></td>
<td class="oct-element"><code>50</code></td>
<td class="hex-element"> <code>28</code></td>
<td class="ch-element"> <code><b>(</b></code> </td>
<td class="dec-element"> <code>72</code></td>
<td class="oct-element"><code>110</code></td>
<td class="hex-element"> <code>48</code></td>
<td class="ch-element"> <code><b>H</b></code> </td>
<td class="dec-element"> <code>104</code></td>
<td class="oct-element"><code>150</code></td>
<td class="hex-element"> <code>68</code></td>
<td class="ch-element"> <code><b>h</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code> 9</code></td>
<td class="oct-element"><code>11</code></td>
<td class="hex-element"> <code>09</code></td>
<td class="ch-element"> <code><b>HT</b></code> (horizontal tab) </td>
<td class="dec-element"> <code>41</code></td>
<td class="oct-element"><code>51</code></td>
<td class="hex-element"> <code>29</code></td>
<td class="ch-element"> <code><b>)</b></code> </td>
<td class="dec-element"> <code>73</code></td>
<td class="oct-element"><code>111</code></td>
<td class="hex-element"> <code>49</code></td>
<td class="ch-element"> <code><b>I</b></code> </td>
<td class="dec-element"> <code>105</code></td>
<td class="oct-element"><code>151</code></td>
<td class="hex-element"> <code>69</code></td>
<td class="ch-element"> <code><b>i</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>10</code></td>
<td class="oct-element"><code>12</code></td>
<td class="hex-element"> <code>0a</code></td>
<td class="ch-element"> <code><b>LF</b></code> (line feed - new line) </td>
<td class="dec-element"> <code>42</code></td>
<td class="oct-element"><code>52</code></td>
<td class="hex-element"> <code>2a</code></td>
<td class="ch-element"> <code><b>*</b></code> </td>
<td class="dec-element"> <code>74</code></td>
<td class="oct-element"><code>112</code></td>
<td class="hex-element"> <code>4a</code></td>
<td class="ch-element"> <code><b>J</b></code> </td>
<td class="dec-element"> <code>106</code></td>
<td class="oct-element"><code>152</code></td>
<td class="hex-element"> <code>6a</code></td>
<td class="ch-element"> <code><b>j</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>11</code></td>
<td class="oct-element"><code>13</code></td>
<td class="hex-element"> <code>0b</code></td>
<td class="ch-element"> <code><b>VT</b></code> (vertical tab) </td>
<td class="dec-element"> <code>43</code></td>
<td class="oct-element"><code>53</code></td>
<td class="hex-element"> <code>2b</code></td>
<td class="ch-element"> <code><b>+</b></code> </td>
<td class="dec-element"> <code>75</code></td>
<td class="oct-element"><code>113</code></td>
<td class="hex-element"> <code>4b</code></td>
<td class="ch-element"> <code><b>K</b></code> </td>
<td class="dec-element"> <code>107</code></td>
<td class="oct-element"><code>153</code></td>
<td class="hex-element"> <code>6b</code></td>
<td class="ch-element"> <code><b>k</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>12</code></td>
<td class="oct-element"><code>14</code></td>
<td class="hex-element"> <code>0c</code></td>
<td class="ch-element"> <code><b>FF</b></code> (form feed - new page) </td>
<td class="dec-element"> <code>44</code></td>
<td class="oct-element"><code>54</code></td>
<td class="hex-element"> <code>2c</code></td>
<td class="ch-element"> <code><b>,</b></code> </td>
<td class="dec-element"> <code>76</code></td>
<td class="oct-element"><code>114</code></td>
<td class="hex-element"> <code>4c</code></td>
<td class="ch-element"> <code><b>L</b></code> </td>
<td class="dec-element"> <code>108</code></td>
<td class="oct-element"><code>154</code></td>
<td class="hex-element"> <code>6c</code></td>
<td class="ch-element"> <code><b>l</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>13</code></td>
<td class="oct-element"><code>15</code></td>
<td class="hex-element"> <code>0d</code></td>
<td class="ch-element"> <code><b>CR</b></code> (carriage return) </td>
<td class="dec-element"> <code>45</code></td>
<td class="oct-element"><code>55</code></td>
<td class="hex-element"> <code>2d</code></td>
<td class="ch-element"> <code><b>-</b></code> </td>
<td class="dec-element"> <code>77</code></td>
<td class="oct-element"><code>115</code></td>
<td class="hex-element"> <code>4d</code></td>
<td class="ch-element"> <code><b>M</b></code> </td>
<td class="dec-element"> <code>109</code></td>
<td class="oct-element"><code>155</code></td>
<td class="hex-element"> <code>6d</code></td>
<td class="ch-element"> <code><b>m</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>14</code></td>
<td class="oct-element"><code>16</code></td>
<td class="hex-element"> <code>0e</code></td>
<td class="ch-element"> <code><b>SO</b></code> (shift out) </td>
<td class="dec-element"> <code>46</code></td>
<td class="oct-element"><code>56</code></td>
<td class="hex-element"> <code>2e</code></td>
<td class="ch-element"> <code><b>.</b></code> </td>
<td class="dec-element"> <code>78</code></td>
<td class="oct-element"><code>116</code></td>
<td class="hex-element"> <code>4e</code></td>
<td class="ch-element"> <code><b>N</b></code> </td>
<td class="dec-element"> <code>110</code></td>
<td class="oct-element"><code>156</code></td>
<td class="hex-element"> <code>6e</code></td>
<td class="ch-element"> <code><b>n</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>15</code></td>
<td class="oct-element"><code>17</code></td>
<td class="hex-element"> <code>0f</code></td>
<td class="ch-element"> <code><b>SI</b></code> (shift in) </td>
<td class="dec-element"> <code>47</code></td>
<td class="oct-element"><code>57</code></td>
<td class="hex-element"> <code>2f</code></td>
<td class="ch-element"> <code><b>/</b></code> </td>
<td class="dec-element"> <code>79</code></td>
<td class="oct-element"><code>117</code></td>
<td class="hex-element"> <code>4f</code></td>
<td class="ch-element"> <code><b>O</b></code> </td>
<td class="dec-element"> <code>111</code></td>
<td class="oct-element"><code>157</code></td>
<td class="hex-element"> <code>6f</code></td>
<td class="ch-element"> <code><b>o</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>16</code></td>
<td class="oct-element"><code>20</code></td>
<td class="hex-element"> <code>10</code></td>
<td class="ch-element"> <code><b>DLE</b></code> (data link escape) </td>
<td class="dec-element"> <code>48</code></td>
<td class="oct-element"><code>60</code></td>
<td class="hex-element"> <code>30</code></td>
<td class="ch-element"> <code><b>0</b></code> </td>
<td class="dec-element"> <code>80</code></td>
<td class="oct-element"><code>120</code></td>
<td class="hex-element"> <code>50</code></td>
<td class="ch-element"> <code><b>P</b></code> </td>
<td class="dec-element"> <code>112</code></td>
<td class="oct-element"><code>160</code></td>
<td class="hex-element"> <code>70</code></td>
<td class="ch-element"> <code><b>p</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>17</code></td>
<td class="oct-element"><code>21</code></td>
<td class="hex-element"> <code>11</code></td>
<td class="ch-element"> <code><b>DC1</b></code> (device control 1) </td>
<td class="dec-element"> <code>49</code></td>
<td class="oct-element"><code>61</code></td>
<td class="hex-element"> <code>31</code></td>
<td class="ch-element"> <code><b>1</b></code> </td>
<td class="dec-element"> <code>81</code></td>
<td class="oct-element"><code>121</code></td>
<td class="hex-element"> <code>51</code></td>
<td class="ch-element"> <code><b>Q</b></code> </td>
<td class="dec-element"> <code>113</code></td>
<td class="oct-element"><code>161</code></td>
<td class="hex-element"> <code>71</code></td>
<td class="ch-element"> <code><b>q</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>18</code></td>
<td class="oct-element"><code>22</code></td>
<td class="hex-element"> <code>12</code></td>
<td class="ch-element"> <code><b>DC2</b></code> (device control 2) </td>
<td class="dec-element"> <code>50</code></td>
<td class="oct-element"><code>62</code></td>
<td class="hex-element"> <code>32</code></td>
<td class="ch-element"> <code><b>2</b></code> </td>
<td class="dec-element"> <code>82</code></td>
<td class="oct-element"><code>122</code></td>
<td class="hex-element"> <code>52</code></td>
<td class="ch-element"> <code><b>R</b></code> </td>
<td class="dec-element"> <code>114</code></td>
<td class="oct-element"><code>162</code></td>
<td class="hex-element"> <code>72</code></td>
<td class="ch-element"> <code><b>r</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>19</code></td>
<td class="oct-element"><code>23</code></td>
<td class="hex-element"> <code>13</code></td>
<td class="ch-element"> <code><b>DC3</b></code> (device control 3) </td>
<td class="dec-element"> <code>51</code></td>
<td class="oct-element"><code>63</code></td>
<td class="hex-element"> <code>33</code></td>
<td class="ch-element"> <code><b>3</b></code> </td>
<td class="dec-element"> <code>83</code></td>
<td class="oct-element"><code>123</code></td>
<td class="hex-element"> <code>53</code></td>
<td class="ch-element"> <code><b>S</b></code> </td>
<td class="dec-element"> <code>115</code></td>
<td class="oct-element"><code>163</code></td>
<td class="hex-element"> <code>73</code></td>
<td class="ch-element"> <code><b>s</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>20</code></td>
<td class="oct-element"><code>24</code></td>
<td class="hex-element"> <code>14</code></td>
<td class="ch-element"> <code><b>DC4</b></code> (device control 4) </td>
<td class="dec-element"> <code>52</code></td>
<td class="oct-element"><code>64</code></td>
<td class="hex-element"> <code>34</code></td>
<td class="ch-element"> <code><b>4</b></code> </td>
<td class="dec-element"> <code>84</code></td>
<td class="oct-element"><code>124</code></td>
<td class="hex-element"> <code>54</code></td>
<td class="ch-element"> <code><b>T</b></code> </td>
<td class="dec-element"> <code>116</code></td>
<td class="oct-element"><code>164</code></td>
<td class="hex-element"> <code>74</code></td>
<td class="ch-element"> <code><b>t</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>21</code></td>
<td class="oct-element"><code>25</code></td>
<td class="hex-element"> <code>15</code></td>
<td class="ch-element"> <code><b>NAK</b></code> (negative acknowledge) </td>
<td class="dec-element"> <code>53</code></td>
<td class="oct-element"><code>65</code></td>
<td class="hex-element"> <code>35</code></td>
<td class="ch-element"> <code><b>5</b></code> </td>
<td class="dec-element"> <code>85</code></td>
<td class="oct-element"><code>125</code></td>
<td class="hex-element"> <code>55</code></td>
<td class="ch-element"> <code><b>U</b></code> </td>
<td class="dec-element"> <code>117</code></td>
<td class="oct-element"><code>165</code></td>
<td class="hex-element"> <code>75</code></td>
<td class="ch-element"> <code><b>u</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>22</code></td>
<td class="oct-element"><code>26</code></td>
<td class="hex-element"> <code>16</code></td>
<td class="ch-element"> <code><b>SYN</b></code> (synchronous idle) </td>
<td class="dec-element"> <code>54</code></td>
<td class="oct-element"><code>66</code></td>
<td class="hex-element"> <code>36</code></td>
<td class="ch-element"> <code><b>6</b></code> </td>
<td class="dec-element"> <code>86</code></td>
<td class="oct-element"><code>126</code></td>
<td class="hex-element"> <code>56</code></td>
<td class="ch-element"> <code><b>V</b></code> </td>
<td class="dec-element"> <code>118</code></td>
<td class="oct-element"><code>166</code></td>
<td class="hex-element"> <code>76</code></td>
<td class="ch-element"> <code><b>v</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>23</code></td>
<td class="oct-element"><code>27</code></td>
<td class="hex-element"> <code>17</code></td>
<td class="ch-element"> <code><b>ETB</b></code> (end of transmission block) </td>
<td class="dec-element"> <code>55</code></td>
<td class="oct-element"><code>67</code></td>
<td class="hex-element"> <code>37</code></td>
<td class="ch-element"> <code><b>7</b></code> </td>
<td class="dec-element"> <code>87</code></td>
<td class="oct-element"><code>127</code></td>
<td class="hex-element"> <code>57</code></td>
<td class="ch-element"> <code><b>W</b></code> </td>
<td class="dec-element"> <code>119</code></td>
<td class="oct-element"><code>167</code></td>
<td class="hex-element"> <code>77</code></td>
<td class="ch-element"> <code><b>w</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>24</code></td>
<td class="oct-element"><code>30</code></td>
<td class="hex-element"> <code>18</code></td>
<td class="ch-element"> <code><b>CAN</b></code> (cancel) </td>
<td class="dec-element"> <code>56</code></td>
<td class="oct-element"><code>70</code></td>
<td class="hex-element"> <code>38</code></td>
<td class="ch-element"> <code><b>8</b></code> </td>
<td class="dec-element"> <code>88</code></td>
<td class="oct-element"><code>130</code></td>
<td class="hex-element"> <code>58</code></td>
<td class="ch-element"> <code><b>X</b></code> </td>
<td class="dec-element"> <code>120</code></td>
<td class="oct-element"><code>170</code></td>
<td class="hex-element"> <code>78</code></td>
<td class="ch-element"> <code><b>x</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>25</code></td>
<td class="oct-element"><code>31</code></td>
<td class="hex-element"> <code>19</code></td>
<td class="ch-element"> <code><b>EM</b></code> (end of medium) </td>
<td class="dec-element"> <code>57</code></td>
<td class="oct-element"><code>71</code></td>
<td class="hex-element"> <code>39</code></td>
<td class="ch-element"> <code><b>9</b></code> </td>
<td class="dec-element"> <code>89</code></td>
<td class="oct-element"><code>131</code></td>
<td class="hex-element"> <code>59</code></td>
<td class="ch-element"> <code><b>Y</b></code> </td>
<td class="dec-element"> <code>121</code></td>
<td class="oct-element"><code>171</code></td>
<td class="hex-element"> <code>79</code></td>
<td class="ch-element"> <code><b>y</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>26</code></td>
<td class="oct-element"><code>32</code></td>
<td class="hex-element"> <code>1a</code></td>
<td class="ch-element"> <code><b>SUB</b></code> (substitute) </td>
<td class="dec-element"> <code>58</code></td>
<td class="oct-element"><code>72</code></td>
<td class="hex-element"> <code>3a</code></td>
<td class="ch-element"> <code><b>:</b></code> </td>
<td class="dec-element"> <code>90</code></td>
<td class="oct-element"><code>132</code></td>
<td class="hex-element"> <code>5a</code></td>
<td class="ch-element"> <code><b>Z</b></code> </td>
<td class="dec-element"> <code>122</code></td>
<td class="oct-element"><code>172</code></td>
<td class="hex-element"> <code>7a</code></td>
<td class="ch-element"> <code><b>z</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>27</code></td>
<td class="oct-element"><code>33</code></td>
<td class="hex-element"> <code>1b</code></td>
<td class="ch-element"> <code><b>ESC</b></code> (escape) </td>
<td class="dec-element"> <code>59</code></td>
<td class="oct-element"><code>73</code></td>
<td class="hex-element"> <code>3b</code></td>
<td class="ch-element"> <code><b>;</b></code> </td>
<td class="dec-element"> <code>91</code></td>
<td class="oct-element"><code>133</code></td>
<td class="hex-element"> <code>5b</code></td>
<td class="ch-element"> <code><b>[</b></code> </td>
<td class="dec-element"> <code>123</code></td>
<td class="oct-element"><code>173</code></td>
<td class="hex-element"> <code>7b</code></td>
<td class="ch-element"> <code><b>{</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>28</code></td>
<td class="oct-element"><code>34</code></td>
<td class="hex-element"> <code>1c</code></td>
<td class="ch-element"> <code><b>FS</b></code> (file separator) </td>
<td class="dec-element"> <code>60</code></td>
<td class="oct-element"><code>74</code></td>
<td class="hex-element"> <code>3c</code></td>
<td class="ch-element"> <code><b>&lt;</b></code> </td>
<td class="dec-element"> <code>92</code></td>
<td class="oct-element"><code>134</code></td>
<td class="hex-element"> <code>5c</code></td>
<td class="ch-element"> <code><b>\ </b></code> </td>
<td class="dec-element"> <code>124</code></td>
<td class="oct-element"><code>174</code></td>
<td class="hex-element"> <code>7c</code></td>
<td class="ch-element"> <code><b>|</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>29</code></td>
<td class="oct-element"><code>35</code></td>
<td class="hex-element"> <code>1d</code></td>
<td class="ch-element"> <code><b>GS</b></code> (group separator) </td>
<td class="dec-element"> <code>61</code></td>
<td class="oct-element"><code>75</code></td>
<td class="hex-element"> <code>3d</code></td>
<td class="ch-element"> <code><b>=</b></code> </td>
<td class="dec-element"> <code>93</code></td>
<td class="oct-element"><code>135</code></td>
<td class="hex-element"> <code>5d</code></td>
<td class="ch-element"> <code><b>]</b></code> </td>
<td class="dec-element"> <code>125</code></td>
<td class="oct-element"><code>175</code></td>
<td class="hex-element"> <code>7d</code></td>
<td class="ch-element"> <code><b>}</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>30</code></td>
<td class="oct-element"><code>36</code></td>
<td class="hex-element"> <code>1e</code></td>
<td class="ch-element"> <code><b>RS</b></code> (record separator) </td>
<td class="dec-element"> <code>62</code></td>
<td class="oct-element"><code>76</code></td>
<td class="hex-element"> <code>3e</code></td>
<td class="ch-element"> <code><b>&gt;</b></code> </td>
<td class="dec-element"> <code>94</code></td>
<td class="oct-element"><code>136</code></td>
<td class="hex-element"> <code>5e</code></td>
<td class="ch-element"> <code><b>^</b></code> </td>
<td class="dec-element"> <code>126</code></td>
<td class="oct-element"><code>176</code></td>
<td class="hex-element"> <code>7e</code></td>
<td class="ch-element"> <code><b>~</b></code>
</td></tr>
<tr>
<td class="dec-element"> <code>31</code></td>
<td class="oct-element"><code>37</code></td>
<td class="hex-element"> <code>1f</code></td>
<td class="ch-element"> <code><b>US</b></code> (unit separator) </td>
<td class="dec-element"> <code>63</code></td>
<td class="oct-element"><code>77</code></td>
<td class="hex-element"> <code>3f</code></td>
<td class="ch-element"> <code><b>?</b></code> </td>
<td class="dec-element"> <code>95</code></td>
<td class="oct-element"><code>137</code></td>
<td class="hex-element"> <code>5f</code></td>
<td class="ch-element"> <code><b>_</b></code> </td>
<td class="dec-element"> <code>127</code></td>
<td class="oct-element"><code>177</code></td>
<td class="hex-element"> <code>7f</code></td>
<td class="ch-element"> <code><b>DEL</b></code> (delete)
</td></tr></table> `